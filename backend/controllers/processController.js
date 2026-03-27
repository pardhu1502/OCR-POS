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

    text = text.replace(/\n/g, " ").replace(/[^\w\s']/g, "");

    const doc = nlp(text);

    const tagged = doc.out("tags");

    const tokens = tagged.map((item) => {
      const word = item.text;
      const tags = item.tags || [];

      let pos = "X";

      if (tags.includes("Noun")) pos = "NOUN";
      else if (tags.includes("Verb")) pos = "VERB";
      else if (tags.includes("Adjective")) pos = "ADJ";
      else if (tags.includes("Adverb")) pos = "ADV";
      else if (tags.includes("Pronoun")) pos = "PRON";
      else if (tags.includes("Determiner")) pos = "DET";
      else if (tags.includes("Conjunction")) pos = "CONJ";
      else if (tags.includes("Preposition")) pos = "ADP";

      return { word, pos };
    });

    console.log(" Tokens:", tokens);

    res.json(tokens);

  } catch (error) {
    console.error(" PROCESS ERROR:", error);

    res.status(500).json({
      error: "Processing failed",
      message: error.message,
    });
  }
};