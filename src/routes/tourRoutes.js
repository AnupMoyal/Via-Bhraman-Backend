import express from "express";
import {
  addTour,
  getTours,
  getTourById,
  updateTour,
  deleteTour
} from "../controllers/tourController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/", upload.single("image"), addTour);         // ✅ Upload 1 image
router.get("/", getTours);                                
router.get("/:id", getTourById);                          
router.put("/:id", upload.single("image"), updateTour);    // ✅ Image update
router.delete("/:id", deleteTour);                        

export default router;
