import path from "path";
import fs from "fs";
import { pathToFileURL } from "url";

/**
 * Dynamically loads chapter content based on
 * class, board, subject and file name.
 *
 * Expected path:
 * src/data/state/class12/CBSE/subjects/chemistry/unit1.js
 */
export const loadChapterContent = async ({
  classLevel,
  board,
  subject,
  file,
}) => {
  try {
    /* Normalize inputs */
    const classKey = `class${classLevel}`;
    const boardKey = board.toUpperCase();
    const subjectKey = subject.toLowerCase();
    const fileKey = `${file}.js`;

    /* Resolve chapter file path */
    const chapterPath = path.resolve(
      process.cwd(),
      "src",
      "data",
      "state",
      classKey,
      boardKey,
      "subjects",
      subjectKey,
      fileKey
    );

    /* Safety: check file exists */
    if (!fs.existsSync(chapterPath)) {
      console.warn("Chapter file not found:", chapterPath);
      return null;
    }

    /* Dynamic import (ESM safe) */
    const moduleUrl = pathToFileURL(chapterPath).href;
    const chapterModule = await import(moduleUrl);

    /* Always return default export */
    return chapterModule.default ?? null;
  } catch (error) {
    console.error("Chapter loader error:", error.message);
    return null;
  }
};
