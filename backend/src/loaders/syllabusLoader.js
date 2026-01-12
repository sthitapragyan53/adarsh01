import path from "path";
import fs from "fs";
import { pathToFileURL } from "url";

export const loadSyllabus = async ({ classLevel, board, subject }) => {
  try {
    const boardKey = board.toUpperCase();

    const syllabusPath = path.resolve(
      process.cwd(),
      "src",
      "data",
      "state",
      `class${classLevel}`,
      boardKey,
      "subjects",
      subject,
      "index.js"
    );

    if (!fs.existsSync(syllabusPath)) {
      console.error("Syllabus file not found:", syllabusPath);
      return null;
    }

    // ✅ ESM-safe dynamic import
    const syllabusModule = await import(
      pathToFileURL(syllabusPath).href
    );

    return syllabusModule.default;
  } catch (err) {
    console.error("Syllabus loader error:", err);
    return null;
  }
};
