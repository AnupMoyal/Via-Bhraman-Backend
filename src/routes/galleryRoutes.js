import express from 'express';
import { getGallery, addMultipleGalleryItems } from '../controllers/galleryController.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.get('/', getGallery);

// ⬇️ Upload multiple files
router.post('/upload-multiple', upload.array('images', 10), addMultipleGalleryItems);

export default router;
