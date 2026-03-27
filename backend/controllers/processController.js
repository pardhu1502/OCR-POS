import Tesseract from "tesseract.js";

export const processImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    console.log("📸 File received, starting OCR...");

    const result = await Tesseract.recognize(
      req.file.buffer,
      "eng",
      {
        logger: (m) => console.log(m),
      }
    );

    const text = result.data.text;

    console.log("📝 Extracted Text:", text);

    const words = text.split(/\s+/).filter(Boolean);

    const tokens = words.map((word) => ({
      word,
      pos: "NOUN",
    }));

    res.json(tokens);

  } catch (error) {
    console.error(" PROCESS ERROR:", error);

    res.status(500).json({
      error: "Processing failed",
      message: error.message,
    });
  }
};