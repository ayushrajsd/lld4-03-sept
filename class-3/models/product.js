const mongoose = require("mongoose");

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
      type: [String],
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

productSchema.pre("save", function () {
  console.log("Inside pre hook");
  this.confirmPassword = undefined;
});

const validCategories = [
  "electronics",
  "clothes",
  "stationery",
  "furniture",
  "games",
];

productSchema.pre("save", function (next) {
  const invalidCategories = this.category.filter((category) => {
    return !validCategories.includes(category);
  });

  if (invalidCategories.length) {
    // ["games"]
    // throw new Error("Invalid Categories")
    return next(
      new Error(`Invalid Categories: ${invalidCategories.join(", ")}`)
    );
  } else {
    // valid scenario
    console.log("success scenario");
    next();
  }
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
