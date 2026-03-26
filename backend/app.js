import express from "express";
import cors from "cors";
import processRoutes from "./routes/processRoutes.js";
import path from "path";


const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api", processRoutes);

const __dirname = path.resolve();

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Handle React routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});