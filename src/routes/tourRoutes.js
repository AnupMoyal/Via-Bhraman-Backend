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

router.post("/", upload.array("images", 10), addTour);
router.get("/", getTours);
router.get("/:id", getTourById);
router.put("/:id", upload.array("images", 10), updateTour);
router.delete("/:id", deleteTour);
router.patch("/:id/favorite", toggleFavorite);

export default router;
