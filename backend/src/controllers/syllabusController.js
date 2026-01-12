import path from "path";
import fs from "fs";
import { pathToFileURL } from "url";

/* ===== GET ALL SUBJECTS ===== */
export const getAllSubjects = async (req, res) => {
  try {
    const { classLevel, board } = req.params;

    const classKey = `class${classLevel}`;
    const boardKey = board.toUpperCase();

    const subjectsPath = path.resolve(
      process.cwd(),
      "src",
      "data",
      "state",
      classKey,
      boardKey,
      "subjects"
    );

    if (!fs.existsSync(subjectsPath)) {
      return res.status(404).json({ message: "Subjects folder not found" });
    }

    const subjectFolders = fs.readdirSync(subjectsPath);
    const subjects = [];

    for (const subjectFolder of subjectFolders) {
      const indexPath = path.resolve(subjectsPath, subjectFolder, "index.js");
      if (!fs.existsSync(indexPath)) continue;

      const moduleUrl = pathToFileURL(indexPath).href;
      const indexModule = await import(moduleUrl);

      subjects.push({
        slug: subjectFolder,
        name: indexModule.default.subject,
        totalChapters: indexModule.default.chapters.length
      });
    }

    res.json({ subjects });
  } catch (err) {
    console.error("Subjects loader error:", err.message);
    res.status(500).json({ message: "Failed to load subjects" });
  }
};

/* ===== GET SUBJECT INDEX ===== */
export const getSubjectIndex = async (req, res) => {
  try {
    const { classLevel, board, subject } = req.params;

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

    res.json(indexModule.default);
  } catch (err) {
    console.error("Syllabus index loader error:", err.message);
    res.status(500).json({ message: "Failed to load syllabus" });
  }
};
