import express from "express";
import cors from "cors";
import processRoutes from "./routes/processRoutes.js";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());



app.use("/api", processRoutes);

const __dirname = path.resolve();

const frontendPath = path.join(__dirname, "frontend/dist");

app.use(express.static(frontendPath));

app.use((req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});