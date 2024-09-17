const express = require("express");

const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/authMiddleware");

// register a user

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  // /api/users/register
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
      data: newUser,
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
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    console.log(token);
    res.send({
      success: true,
      message: "User logged in successfully",
      data: token,
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

userRouter.get("/get-current-user", auth, async (req, res) => {
  // console.log("URL:", req.url, req.method);
  // console.log("tokens", req.headers["authorization"]);
  const user = await User.findById(req.body.userId).select("-password");
  res.send({ success: true, message: "You are authenticated", data: user });
});

module.exports = userRouter;
