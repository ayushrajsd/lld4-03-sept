const ProductModel = require("../models/product");

const getAllProducts = async (req, res) => {
  const allProducts = await ProductModel.find();
  console.log(allProducts);
  return res.status(200).json({
    message: "All products fetched successfully",
    products: allProducts,
  });
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await ProductModel.findById(id);
  console.log(product);
  return res.status(200).json({
    message: "Product fetched successfully",
    product: product,
  });
};

const updateProductById = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const product = await ProductModel.findByIdAndUpdate(id, body, { new: true });
  return res.status(201).json({
    message: "Product updated successfully",
    product: product,
  });
};

const updateProductByIdPatch = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const product = await ProductModel.findByIdAndUpdate(id, body, { new: true });
  return res.status(201).json({
    message: "Product updated successfully",
    product: product,
  });
};

const deleteProductById = async (req, res) => {
  const id = req.params.id;
  await ProductModel.findByIdAndDelete(id);
  return res.status(200).json({ message: "Product deleted successfully" });
};

const createProduct = async (req, res) => {
  try {
    const body = req.body;
    console.log("creating product");
    const product = await ProductModel.create({
      product_name: body.product_name,
      product_price: body.product_price,
      category: body.category,
      isInStock: body.isInStock,
      password: body.password,
      confirmPassword: body.confirmPassword,
    });
    console.log("product crearted", product);
    return res
      .status(201)
      .json({ message: "Product created successfully", product: product });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  updateProductById,
  updateProductByIdPatch,
  deleteProductById,
  createProduct,
};
