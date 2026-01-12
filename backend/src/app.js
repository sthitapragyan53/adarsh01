import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import boardRoutes from "./routes/boardRoutes.js";
import userRoutes from "./routes/user.routes.js";
import syllabusRoutes from "./routes/syllabusRoutes.js";
import chapterRoutes from "./routes/chapterRoutes.js";
import progressRoutes from "./routes/progressRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/board", boardRoutes);
app.use("/api/user", userRoutes);
app.use("/api/syllabus", syllabusRoutes);
app.use("/api/chapter", chapterRoutes);
app.use("/api/progress", progressRoutes);

app.get("/", (req, res) => {
  res.send(" sthita Backend  is Running.. yeeeeee.");
});

export default app;
