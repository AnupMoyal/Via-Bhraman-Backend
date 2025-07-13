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

// ✅ Use `any()` to accept files from any field name
router.post("/", upload.any(), addTour);
router.get("/", getTours);
router.get("/:id", getTourById);
router.put("/:id", upload.any(), updateTour);
router.delete("/:id", deleteTour);
router.patch("/:id/favorite", toggleFavorite);

export default router;
