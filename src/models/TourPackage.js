import mongoose from "mongoose";

const tourPackageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true }, // e.g., "Scotland"
  city: { type: String }, // e.g., "Edinburgh"

  description: { type: String, required: true },

  duration: { type: String, required: true }, // e.g., "5 Days / 4 Nights"
  people: { type: Number, required: true }, // e.g., max group size
  price: { type: Number, required: true },

  rating: { type: Number, default: 5 },
  ratingCount: { type: Number, default: 1 },

  featured: { type: Boolean, default: false },
  isFavorite: { type: Boolean, default: false },

 // Support multiple images

  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("TourPackage", tourPackageSchema);
