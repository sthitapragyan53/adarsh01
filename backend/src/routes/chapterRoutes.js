import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { loadChapterContent } from "../loaders/chapterLoader.js";

const router = express.Router();

router.get("/:classLevel/:board/:subject/:chapterId", protect, async (req, res) => {
  const { classLevel, board, subject, chapterId } = req.params;

  const chapter = await loadChapterContent({
    classLevel,
    board,
    subject,
    file: chapterId
  });

  if (!chapter) {
    return res.status(404).json({ message: "Chapter not found" });
  }

  res.json(chapter);
});

export default router;
