import express from "express";
import {
  addTour,
  getTours,
  getTourById,
  updateTour,
  deleteTour,
  toggleFavorite
} from "../controllers/tourController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// ✅ Add new tour with multiple images
router.post("/", upload.array("images", 10), addTour);

// ✅ Get all tours
router.get("/", getTours);

// ✅ Get single tour by ID
router.get("/:id", getTourById);

// ✅ Update tour (with optional image update)
router.put("/:id", upload.array("images", 10), updateTour);

// ✅ Delete tour
router.delete("/:id", deleteTour);

// ✅ Toggle favorite
router.patch("/:id/favorite", toggleFavorite);

export default router;
