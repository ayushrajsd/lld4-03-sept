const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  updateProductByIdPatch,
  deleteProductById,
} = require("../controllers/productController");

const productRouter = express.Router();

// create a product
productRouter.post("/", createProduct); // /api/products/ -> post

// get the products

productRouter.get("/", getAllProducts); // /api/products/

// find a produyct by id
productRouter.get("/:id", getProductById); // /api/products/:id

// update a product by id
productRouter.put("/:id", updateProductById);

productRouter.patch("/:id", updateProductById);

productRouter.delete("/:id", deleteProductById);

module.exports = productRouter;
