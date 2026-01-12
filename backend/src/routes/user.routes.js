import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import User from "../models/User.js";

const router = express.Router();

// GET logged-in user
router.get("/me", protect, (req, res) => {
  res.json(req.user);
});

// POST onboarding (board + class)
router.post("/onboarding", protect, async (req, res) => {
  const { board, classLevel } = req.body;

  await User.findByIdAndUpdate(req.user._id, {
    board,
    classLevel
  });

  res.json({ message: "Onboarding saved" });
});

export default router;
