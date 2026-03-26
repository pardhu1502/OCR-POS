import express from "express";
import { upload } from "../middleware/upload.js";
import { processImage } from "../controllers/processController.js";


const router = express.Router();

router.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    message: "Image uploaded successfully",
    file: req.file,
  });
});

router.post("/process", upload.single("image"), processImage);

export default router;