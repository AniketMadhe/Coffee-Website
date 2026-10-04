const router = require("express").Router();
const Coffee = require("../models/coffeemodel");
const { authenticate, adminAuth } = require("./auth/authenticate");

router.post("/coffee", adminAuth, async (req, res) => {
  try {
    const { name, price, description, imageUrl } = req.body;
    const newCoffee = new Coffee({
      name,
      price,
      description,
      imageUrl,
    });
    const savedCoffee = await newCoffee.save();
    res.status(201).json("New coffee created Successfully!");
  } catch (e) {
    res.status(400).json("Invalid credentials");
  }
});

module.exports = router;
