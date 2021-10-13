const mongoose = require("mongoose");


const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    cost: {
      type: Number,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: false,
  }
);


// CRIO_SOLUTION_START_MODULE_AUTH
// TODO (Rohin) - Evaluate if we can teach why we need the toJSON Plugin.
// add plugin that converts mongoose to json

// CRIO_SOLUTION_END_MODULE_AUTH
/**
 * @typedef Product
 */
const Product = mongoose.model("Product", productSchema);

module.exports.Product = Product;
module.exports.productSchema = productSchema;
