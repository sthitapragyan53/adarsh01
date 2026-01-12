import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  markChapterCompleted,
  unmarkChapterCompleted,   // ✅ ADD THIS
  getUserProgress
} from "../controllers/progressController.js";

const router = express.Router();

router.get("/", protect, getUserProgress);
router.post("/complete", protect, markChapterCompleted);
router.post("/uncomplete", protect, unmarkChapterCompleted);

export default router;
