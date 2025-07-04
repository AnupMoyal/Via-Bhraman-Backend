import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/auth.js";
import contactRoutes from "./src/routes/contact.routes.js";
import path from 'path';
import { fileURLToPath } from 'url';
import galleryRoutes from "./src/routes/galleryRoutes.js";

// Fix for __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", contactRoutes);
app.use("/api/gallery", galleryRoutes);


// ✅ Serve static uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("jai shree ram");
  console.log("jai mata di");
});
