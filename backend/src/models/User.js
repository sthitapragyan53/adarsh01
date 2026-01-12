import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,

  board: String,
  classLevel: String,

  // Progress tracking
  progress: [
    {
      subject: String,
      completedChapters: [String],
      totalChapters: Number
    }
  ]
});

const User = mongoose.model("User", userSchema);
export default User;
