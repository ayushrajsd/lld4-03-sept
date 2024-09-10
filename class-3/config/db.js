const mongoose = require("mongoose");

const dbURL = `mongodb+srv://ayushrajsd:tJaZnB5CyT1e6bld@cluster0.cc30r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("Connected to DB");
  } catch (err) {
    console.log("Error connecting to DB", err);
  }
};

module.exports = connectDB;
