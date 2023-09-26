const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Sign Up
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // res.send({ username, email, password });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).send({ msg: "User created successfully" });
  } catch (error) {
    res.status(500).send({ error: "Error is signing up" });
  }
});

// get registered users
router.get("/register", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ error: "Unable to get the users" });
  }
});

//Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // Check user
    if (!user) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }
    // check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }
    // craete token
    const token = jwt.sign({ userId: user.id }, process.env.SECRET, {
      expiresIn: "1hr",
    });
    res.json({ message: "Login Successfull", token });
  } catch (error) {
    res.status(500).send({ error: "Unable to login the User!" });
  }
});

module.exports = router;
