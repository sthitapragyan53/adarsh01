import User from "../models/User.js";
import path from "path";
import fs from "fs";
import { pathToFileURL } from "url";

/* ================= GET USER PROGRESS ================= */
export const getUserProgress = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json(user.progress || []);
  } catch {
    res.status(500).json({ message: "Failed to load progress" });
  }
};

/* ================= MARK CHAPTER COMPLETED ================= */
export const markChapterCompleted = async (req, res) => {
  try {
    const { subject, chapterId, classLevel, board } = req.body;
    const user = await User.findById(req.user._id);

    let subjectProgress = user.progress.find(
      (p) => p.subject === subject
    );

    // If first time subject → load index to get total chapters
    if (!subjectProgress) {
      const classKey = `class${classLevel}`;
      const boardKey = board.toUpperCase();
      const subjectKey = subject.toLowerCase();

      const indexPath = path.resolve(
        process.cwd(),
        "src",
        "data",
        "state",
        classKey,
        boardKey,
        "subjects",
        subjectKey,
        "index.js"
      );

      if (!fs.existsSync(indexPath)) {
        return res.status(404).json({ message: "Subject index not found" });
      }

      const moduleUrl = pathToFileURL(indexPath).href;
      const indexModule = await import(moduleUrl);
      const totalChapters = indexModule.default.chapters.length;

      subjectProgress = {
        subject,
        completedChapters: [],
        totalChapters
      };

      user.progress.push(subjectProgress);
    }

    if (!subjectProgress.completedChapters.includes(chapterId)) {
      subjectProgress.completedChapters.push(chapterId);
    }

    await user.save();
    res.json({ message: "Chapter marked completed" });

  } catch (err) {
    console.error("Mark completed error:", err.message);
    res.status(500).json({ message: "Failed to mark completed" });
  }
};

/* ================= UNMARK CHAPTER COMPLETED ================= */
export const unmarkChapterCompleted = async (req, res) => {
  try {
    const { subject, chapterId } = req.body;
    const user = await User.findById(req.user._id);

    const subjectProgress = user.progress.find(
      (p) => p.subject === subject
    );

    if (!subjectProgress)
      return res.status(404).json({ message: "Subject progress not found" });

    subjectProgress.completedChapters =
      subjectProgress.completedChapters.filter((c) => c !== chapterId);

    await user.save();
    res.json({ message: "Chapter unmarked" });

  } catch (err) {
    console.error("Unmark error:", err.message);
    res.status(500).json({ message: "Failed to unmark" });
  }
};
