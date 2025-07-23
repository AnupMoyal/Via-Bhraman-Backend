import express from "express";
import { bookTour } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/book", bookTour);

export default router;
