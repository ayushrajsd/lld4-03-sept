/**
 * tJaZnB5CyT1e6bld
 * mongodb+srv://ayushrajsd:tJaZnB5CyT1e6bld@cluster0.cc30r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
 *
 * Mongoose - ORM for MongoDB
 *
 * using mongoose -> define Models, schema, connect to db, perform CRUD operations
 */

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const dbURL = `mongodb+srv://ayushrajsd:tJaZnB5CyT1e6bld@cluster0.cc30r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose
  .connect(dbURL)
  .then(function (connection) {
    console.log("Connected to DB");
  })
  .catch(function (err) {
    console.log("Error connecting to DB", err);
  });

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
      unique: true,
    },
    product_price: {
      type: Number,
      required: true,
    },
    isInStock: {
      type: Boolean,
      default: true,
    },
    category: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    confirmPassword: {
      type: String,
      required: true,
      minLength: 8,
      validate: {
        validator: function () {
          return this.password === this.confirmPassword;
        },
        message: "Password and Confirm Password should be same",
      },
    },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("Product", productSchema);

app.use(express.json());

// create a product

app.post("/api/products", async (req, res) => {
  try {
    const body = req.body;
    const product = await ProductModel.create({
      product_name: body.product_name,
      product_price: body.product_price,
      category: body.category,
      isInStock: body.isInStock,
      password: body.password,
      confirmPassword: body.confirmPassword,
    });
    console.log(product);
    return res
      .status(201)
      .json({ message: "Product created successfully", product: product });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// get the products

app.get("/api/products", async (req, res) => {
  const allProducts = await ProductModel.find();
  console.log(allProducts);
  return res.status(200).json({
    message: "All products fetched successfully",
    products: allProducts,
  });
});

// find a produyct by id
app.get("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  const product = await ProductModel.findById(id);
  console.log(product);
  return res.status(200).json({
    message: "Product fetched successfully",
    product: product,
  });
});

// update a product by id
app.put("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const product = await ProductModel.findByIdAndUpdate(id, body, { new: true });
  return res.status(201).json({
    message: "Product updated successfully",
    product: product,
  });
});

app.patch("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const product = await ProductModel.findByIdAndUpdate(id, body, { new: true });
  return res.status(201).json({
    message: "Product updated successfully",
    product: product,
  });
});
/**
 *
 * difference between PUT and PATCH
 */

app.delete("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  await ProductModel.findByIdAndDelete(id);
  return res.status(200).json({ message: "Product deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
