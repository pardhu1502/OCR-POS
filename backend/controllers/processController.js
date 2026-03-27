import { extractText } from "../services/ocrService.js";
import { tagText } from "../services/posService.js";
export const processImage = async (req, res) => {
    try {
      const imagePath = req.file.path;
  
      const text = await extractText(imagePath);
      const tokens = tagText(text);
  
      res.json({ text, tokens });
  
    } catch (error) {
      console.error("ERROR:", error);   // 👈 ADD THIS
      res.status(500).json({ error: error.message }); // 👈 SHOW REAL ERROR
    }
  };