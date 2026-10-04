const express = require("express");
const router = express.Router();
const User = require("../models/usermodel");
const Coffee = require("../models/coffeemodel");
const {
  hashPassword,
  authenticate,
  comparePassword,
} = require("./auth/authenticate");

const jwt = require("jsonwebtoken");

router.get("/home", authenticate, async (req, res) => {
  const userDetails = await User.findById(req.user.id);
  res.status(200).json(userDetails);
});

router.get("/coffee", async (req, res) => {
  try {
    const allCoffee = await Coffee.find();
    res.status(200).json(allCoffee);
  } catch (e) {
    res.status(404).json("resource not found!");
  }
});

router.get("/logout", (req, res) => {
  console.log("logg");
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false, // Set to true if your frontend and backend both use HTTPS (e.g., in production)
      sameSite: "lax",
    });

    // 👇 REQUIRED: Send a response so the frontend request finishes successfully
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/signup", async (req, res) => {
  console.log("hi");
  const { username, email, password } = req.body;
  console.log(username);
  const hashedPassword = await hashPassword(password);
  const user = new User({
    username,
    email,
    password: hashedPassword,
  });

  await user.save();
  res.status(201).json("User created successfully");
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    const user = await User.findOne({ username });
    console.log(user);
    if (!user) return res.status(401).json("User not found");
    const validPassword = await comparePassword(password, user.password);
    if (!validPassword) return res.status(401).json("Incorrect credentials");

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      `${process.env.SEC_KEY}`,
      { expiresIn: "15d" },
    );
    if (!token) return res.status(500).json("failed generating token");
    console.log(token);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 15 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json("Internal server error");
  }
});

module.exports = router;
