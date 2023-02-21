const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 255,
  },
  googleId: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  thumbnail: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    maxLength: 1024,
  },
});

module.exports = mongoose.model("User", userSchema);
