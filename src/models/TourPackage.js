import mongoose from "mongoose";

const tourPackageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  city: { type: String },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  people: { type: Number, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 5 },
  ratingCount: { type: Number, default: 1 },
  featured: { type: Boolean, default: false },
  isFavorite: { type: Boolean, default: false },

  // ✅ This will store the uploaded file paths
  imageUrls: { type: [String], default: [] },

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("TourPackage", tourPackageSchema);
