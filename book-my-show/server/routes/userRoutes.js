const express = require("express");

const User = require("../models/userModel");

// register a user

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.send({
        success: false,
        message: "User already exists",
      });
    }
    const newUser = new User(req.body);
    await newUser.save();

    res.send({
      success: true,
      message: "User registered successfully",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }); //{name:"Swapna", email:"swapna", password:"swapna"}
    if (!user) {
      return res.send({
        success: false,
        message: "User not found",
      });
    }

    if (req.body.password !== user.password) {
      return res.send({
        success: false,
        message: "Invalid password",
      });
    }
    res.send({
      success: true,
      message: "User logged in successfully",
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = userRouter;
