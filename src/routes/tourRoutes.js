import express from "express";
import {
  addTour,
  getTours,
  getTourById,
  updateTour,
  deleteTour,
  toggleFavorite
} from "../controllers/tourController.js";

import { searchTours } from "../controllers/searchController.js"; // ✅ Add this line
import upload from "../middleware/upload.js";

const router = express.Router();

// 🔍 Add Search Route
router.post("/search", searchTours);

// Existing CRUD routes
router.post("/", upload.any(), addTour);
router.get("/", getTours);
router.get("/:id", getTourById);
router.put("/:id", upload.any(), updateTour);
router.delete("/:id", deleteTour);
router.patch("/:id/favorite", toggleFavorite);

export default router;
