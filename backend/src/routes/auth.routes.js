import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";   // ✅ import jwt
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

// Normal auth
router.post("/register", registerUser);
router.post("/login", loginUser);

// Google Login Start
router.get("/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google Callback
router.get("/google/callback",
  passport.authenticate("google", {
    failureRedirect: "https://adarsh01.vercel.app/login",
    session: false   // JWT based auth
  }),
  async (req, res) => {
    try {
      const user = req.user;

      // 🔹 Create JWT
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      // 🔹 Decide where to go
      let redirectPath;
      if (user.board && user.classLevel) {
        redirectPath = "/home";
      } else {
        redirectPath = "/choose-board";
      }

      // 🔹 Redirect to frontend with token
      res.redirect(
        `https://adarsh01.vercel.app/google-success?token=${token}&redirect=${redirectPath}`
      );

    } catch (err) {
      console.error("Google callback error:", err);
      res.redirect("https://adarsh01.vercel.app/login");
    }
  }
);

export default router;
