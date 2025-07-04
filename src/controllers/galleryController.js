import Gallery from '../models/galleryModel.js';

export const addMultipleGalleryItems = async (req, res) => {
  try {
    const { title, category } = req.body;
    const files = req.files;

    if (!title || !category || !files || files.length === 0) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const items = files.map(file => ({
      title,
      category,
      imageUrl: `/uploads/${file.filename}`
    }));

    const insertedItems = await Gallery.insertMany(items);

    res.status(201).json({ success: true, message: 'Gallery items uploaded', data: insertedItems });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
