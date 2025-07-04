import TourPackage from "../models/TourPackage.js";

// Add new tour
export const addTour = async (req, res) => {
  try {
    const { title, location, description, duration, price } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";

    const newTour = new TourPackage({
      title, location, description, duration, price, imageUrl,
    });

    await newTour.save();
    res.status(201).json({ success: true, message: "Tour added", data: newTour });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error adding tour", error: error.message });
  }
};

// Get all tours
export const getTours = async (req, res) => {
  try {
    const tours = await TourPackage.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: tours });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching tours" });
  }
};

// Get single tour
export const getTourById = async (req, res) => {
  try {
    const tour = await TourPackage.findById(req.params.id);
    res.status(200).json({ success: true, data: tour });
  } catch (error) {
    res.status(404).json({ success: false, message: "Tour not found" });
  }
};

// Update tour
export const updateTour = async (req, res) => {
  try {
    const { title, location, description, duration, price } = req.body;
    const updateData = { title, location, description, duration, price };

    if (req.file) {
      updateData.imageUrl = `/uploads/${req.file.filename}`;
    }

    const tour = await TourPackage.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.status(200).json({ success: true, message: "Tour updated", data: tour });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating tour" });
  }
};

// Delete tour
export const deleteTour = async (req, res) => {
  try {
    await TourPackage.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Tour deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting tour" });
  }
};
