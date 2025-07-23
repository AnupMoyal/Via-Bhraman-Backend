import Booking from "../models/Booking.js";
import TourPackage from "../models/TourPackage.js";

export const bookTour = async (req, res) => {
  try {
    const { tourPackageId, userName, email, phone, numberOfPeople } = req.body;

    const tour = await TourPackage.findById(tourPackageId);
    if (!tour) {
      return res.status(404).json({ success: false, message: "Tour package not found" });
    }

    const totalPrice = tour.price * numberOfPeople;

    const booking = new Booking({
      tourPackage: tour._id,
      userName,
      email,
      phone,
      numberOfPeople,
      totalPrice
    });

    await booking.save();

    res.status(201).json({ success: true, message: "Tour booked successfully", booking });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};
