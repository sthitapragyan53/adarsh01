import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema({
  id: String,
  unit: String,
  title: String
});

const syllabusSchema = new mongoose.Schema({
  classLevel: String,     // "10", "11", "12"
  board: String,          // "cbse", "chse" etc (lowercase)
  subjectSlug: String,    // "math", "physics"
  subject: String,        // Display name "Mathematics"
  chapters: [chapterSchema]
});

const Syllabus = mongoose.model("Syllabus", syllabusSchema);
export default Syllabus;
