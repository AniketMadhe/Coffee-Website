const express = require("express");
const router = express.Router();
const User = require("../models/usermodel");
const { hashPassword } = require("./auth/athenticate");

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await hashPassword(password);
  const user = new User({
    username,
    email,
    password: hashedPassword,
  });

  await user.save();
  res.status(201).json("User created successfully");
});

module.exports = router;
