router.get("/google/callback",
  passport.authenticate("google", {
    failureRedirect: "https://adarsh01.vercel.app/login",
    session: true
  }),
  async (req, res) => {
    try {
      // req.user is set by passport
      const user = req.user;

      // Check onboarding fields from MongoDB
      if (user.board && user.classLevel) {
        return res.redirect("https://adarsh01.vercel.app/home");
      } else {
        return res.redirect("https://adarsh01.vercel.app/choose-board");
      }

    } catch (err) {
      return res.redirect("https://adarsh01.vercel.app/login");
    }
  }
);
