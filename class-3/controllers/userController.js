const UserModel = require("../models/userModel");

const createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await UserModel.create({
      name: name,
      email: email,
    });

    return res
      .status(201)
      .json({ message: "User created successfully", user: user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createUser,
};
