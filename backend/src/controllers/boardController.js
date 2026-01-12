import User from "../models/User.js";
import Board from "../models/Board.js";

// SAVE selected board
export const selectBoard = async (req, res) => {
  const { userId, board, classLevel } = req.body;

  await User.findByIdAndUpdate(userId, {
    board,
    classLevel
  });

  res.json({ message: "Board selected" });
};

// GET board content
export const getBoardContent = async (req, res) => {
  const board = await Board.findOne({ boardName: req.params.boardName });
  res.json(board);
};
