import Tesseract from "tesseract.js";
import nlp from "compromise";

export const processImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    console.log("📸 Starting OCR...");

    const result = await Tesseract.recognize(
      req.file.buffer,
      "eng",
      {
        logger: (m) => console.log(m),
      }
    );

    let text = result.data.text;

    console.log("📝 Extracted Text:", text);

    // ✅ Clean text
    text = text
      .replace(/\n/g, " ")
      .replace(/[^\w\s']/g, "")
      .trim();

    const doc = nlp(text);

    const words = text.split(/\s+/).filter(Boolean);

    // ✅ Precompute POS sets
    const nounSet = new Set(doc.match("#Noun").out("array"));
    const verbSet = new Set(doc.match("#Verb").out("array"));
    const adjSet = new Set(doc.match("#Adjective").out("array"));
    const advSet = new Set(doc.match("#Adverb").out("array"));
    const pronSet = new Set(doc.match("#Pronoun").out("array"));
    const detSet = new Set(doc.match("#Determiner").out("array"));
    const conjSet = new Set(doc.match("#Conjunction").out("array"));
    const adpSet = new Set(doc.match("#Preposition").out("array"));

    const tokens = words.map((word) => {
      let pos = "X";

      if (nounSet.has(word)) pos = "NOUN";
      else if (verbSet.has(word)) pos = "VERB";
      else if (adjSet.has(word)) pos = "ADJ";
      else if (advSet.has(word)) pos = "ADV";
      else if (pronSet.has(word)) pos = "PRON";
      else if (detSet.has(word)) pos = "DET";
      else if (conjSet.has(word)) pos = "CONJ";
      else if (adpSet.has(word)) pos = "ADP";

      return { word, pos };
    });

    console.log("✅ Tokens:", tokens);

    res.json(tokens);

  } catch (error) {
    console.error("❌ PROCESS ERROR:", error);

    res.status(500).json({
      error: "Processing failed",
      message: error.message,
    });
  }
};