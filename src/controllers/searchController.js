// controllers/searchController.js
import Tour from '../models/TourPackage.js';

export const searchTours = async (req, res) => {
  try {
    const { keyword } = req.body;

    if (!keyword || typeof keyword !== 'string') {
      return res.status(400).json({ success: false, message: 'Keyword is required and must be a string' });
    }

    const query = {
      $or: [
        { location: { $regex: keyword, $options: 'i' } },
        { city: { $regex: keyword, $options: 'i' } },
        { title: { $regex: keyword, $options: 'i' } },
      ]
    };

    const results = await Tour.find(query);

    res.status(200).json({ success: true, count: results.length, results });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server Error', error: err.message });
  }
};
