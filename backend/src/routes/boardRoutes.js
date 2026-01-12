import express from "express";
import { selectBoard, getBoardContent } from "../controllers/boardController.js";

const router = express.Router();

router.post("/select", selectBoard);
router.get("/:boardName", getBoardContent);

export default router;
