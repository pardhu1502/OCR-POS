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

    const text = result.data.text;

    console.log("📝 Extracted Text:", text);

    const cleanedText = text.replace(/\n/g, " ").trim();

    const doc = nlp(cleanedText);

    const terms = doc.terms().json();

    const tokens = terms.map((term) => {
      const word = term.text;
      const tags = term.tags;

      let pos = "X";

      if (tags.includes("Noun")) pos = "NOUN";
      else if (tags.includes("Verb")) pos = "VERB";
      else if (tags.includes("Adjective")) pos = "ADJ";
      else if (tags.includes("Adverb")) pos = "ADV";
      else if (tags.includes("Pronoun")) pos = "PRON";
      else if (tags.includes("Determiner")) pos = "DET";
      else if (tags.includes("Conjunction")) pos = "CONJ";
      else if (tags.includes("Preposition")) pos = "ADP";

      return {
        word,
        pos,
      };
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