import express from "express";
import passport from "passport";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback",
  passport.authenticate("google", {
    failureRedirect: "https://adarsh01.vercel.app/login",
    session: true
  }),
  async (req, res) => {
    const user = req.user;
    if (user.board && user.classLevel) {
      return res.redirect("https://adarsh01.vercel.app/home");
    } else {
      return res.redirect("https://adarsh01.vercel.app/choose-board");
    }
  }
);

export default router;   // ✅ THIS FIXES IT
