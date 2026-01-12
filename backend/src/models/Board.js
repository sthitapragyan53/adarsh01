import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
  boardName: String,
  content: Object
});

const Board = mongoose.model("Board", boardSchema);
export default Board;
