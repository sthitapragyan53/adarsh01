import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getSubjectIndex, getAllSubjects } from "../controllers/syllabusController.js";

const router = express.Router();

/* NEW — Dashboard needs this */
router.get("/:classLevel/:board", protect, getAllSubjects);

/* Existing — Subject page */
router.get("/:classLevel/:board/:subject", protect, getSubjectIndex);

export default router;
