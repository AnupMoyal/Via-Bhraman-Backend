import mongoose from "mongoose";

const tourPackageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true }, // e.g., "5 Days / 4 Nights"
  price: { type: Number, required: true },
  imageUrl: { type: String }, // Path to uploaded image
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("TourPackage", tourPackageSchema);
