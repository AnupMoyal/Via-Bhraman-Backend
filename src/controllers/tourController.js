import TourPackage from "../models/TourPackage.js";

// ✅ Add new tour
export const addTour = async (req, res) => {
  try {
    const {
      title,
      location,
      city,
      description,
      duration,
      price,
      people,
      featured,
      isFavorite,
      rating,
      ratingCount,
    } = req.body;

    const imageUrls = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];

    const newTour = new TourPackage({
      title,
      location,
      city,
      description,
      duration,
      price: Number(price),
      people: Number(people),
      featured: featured === "true",
      isFavorite: isFavorite === "true",
      rating: rating ? Number(rating) : 5,
      ratingCount: ratingCount ? Number(ratingCount) : 1,
      imageUrls,
    });

    await newTour.save();
    res.status(201).json({ success: true, message: "Tour added", data: newTour });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error adding tour", error: error.message });
  }
};

// ✅ Get all tours (with optional search filter)
export const getTours = async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    if (search) {
      const regex = new RegExp(search, "i");
      query = {
        $or: [
          { title: regex },
          { location: regex },
          { city: regex },
        ],
      };
    }

    const tours = await TourPackage.find(query).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: tours });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching tours", error: error.message });
  }
};

// ✅ Get single tour by ID
export const getTourById = async (req, res) => {
  try {
    const tour = await TourPackage.findById(req.params.id);
    if (!tour) return res.status(404).json({ success: false, message: "Tour not found" });
    res.status(200).json({ success: true, data: tour });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching tour", error: error.message });
  }
};

// ✅ Update tour
export const updateTour = async (req, res) => {
  try {
    const {
      title,
      location,
      city,
      description,
      duration,
      price,
      people,
      featured,
      isFavorite,
      rating,
      ratingCount,
    } = req.body;

    const updateData = {
      title,
      location,
      city,
      description,
      duration,
      price: Number(price),
      people: Number(people),
      featured: featured === "true",
      isFavorite: isFavorite === "true",
      rating: rating ? Number(rating) : 5,
      ratingCount: ratingCount ? Number(ratingCount) : 1,
    };

    if (req.files && req.files.length > 0) {
      updateData.imageUrls = req.files.map(file => `/uploads/${file.filename}`);
    }

    const tour = await TourPackage.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!tour) return res.status(404).json({ success: false, message: "Tour not found" });

    res.status(200).json({ success: true, message: "Tour updated", data: tour });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating tour", error: error.message });
  }
};

// ✅ Delete tour
export const deleteTour = async (req, res) => {
  try {
    const tour = await TourPackage.findByIdAndDelete(req.params.id);
    if (!tour) return res.status(404).json({ success: false, message: "Tour not found" });
    res.status(200).json({ success: true, message: "Tour deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting tour", error: error.message });
  }
};

// ✅ Toggle favorite
export const toggleFavorite = async (req, res) => {
  try {
    const tour = await TourPackage.findById(req.params.id);
    if (!tour) return res.status(404).json({ success: false, message: "Tour not found" });

    tour.isFavorite = !tour.isFavorite;
    await tour.save();

    res.status(200).json({ success: true, message: "Favorite toggled", data: tour });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error toggling favorite", error: error.message });
  }
};
