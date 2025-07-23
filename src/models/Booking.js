import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  tourPackage: { type: mongoose.Schema.Types.ObjectId, ref: "TourPackage", required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  numberOfPeople: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  bookingDate: { type: Date, default: Date.now },
});

export default mongoose.model("Booking", bookingSchema);
