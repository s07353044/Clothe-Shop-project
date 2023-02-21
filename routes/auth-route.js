const router = require("express").Router();
const passport = require("passport");

router.get("/login", (req, res) => {
  res.render("login", { user: req.user });
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect("/profile");
});

router.get("/logout", (req, res) => {
  res.render("logout", { user: req.user });
});

router.get("/ShopCar", (req, res) => {
  res.render("ShopCar", { user: req.user });
});

module.exports = router;
