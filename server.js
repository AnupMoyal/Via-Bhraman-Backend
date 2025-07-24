import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/auth.js";
import contactRoutes from "./src/routes/contact.routes.js";
import galleryRoutes from "./src/routes/galleryRoutes.js";
import tourRoutes from "./src/routes/tourRoutes.js";
import bookingRoutes from "./src/routes/bookingRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ✅ required for multer/form-data

// Static uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", contactRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/bookings", bookingRoutes);

// Global error handler (for multer or other crashes)
app.use((err, req, res, next) => {
  console.error("💥 Global Error:", err.stack);
  res.status(500).json({ success: false, message: "Unhandled error", error: err.message });
});

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log("🙏 Jai Shree Ram");
  console.log("🙏 Jai Shree Ram");
});
