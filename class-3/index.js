/**
 * tJaZnB5CyT1e6bld
 * mongodb+srv://ayushrajsd:tJaZnB5CyT1e6bld@cluster0.cc30r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
 *
 * Mongoose - ORM for MongoDB
 *
 * using mongoose -> define Models, schema, connect to db, perform CRUD operations
 */

const express = require("express");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());

// routes
app.use("/api/products", productRouter); // api/products/1234 -> get
app.use("/api/users", userRouter);

// global errior handler
app.use((err, req, res) => {
  console.error(err);
  return res.status(500).json({ message: "Internal server error" });
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
