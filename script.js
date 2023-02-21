const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes/auth-route");
const profileRoute = require("./routes/profile-route");
require("./config/passport");
const cookieSession = require("cookie-session");
const passport = require("passport");

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    console.log("Connect to mongodb altas.");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  cookieSession({
    keys: [process.env.SECRET],
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRoute);
app.use("/profile", profileRoute);

app.get("/", (req, res) => {
  res.render("index", { user: req.user });
});

app.listen(8080, () => {
  console.log("Sever running on port 8080.");
});



