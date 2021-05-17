const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  richDescription: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  images: [String],
  countInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 255,
  },
  brand: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  isFeatured: {
    type: Boolean,
    default: flase,
  },
  rating: {
    type: Number,
    default: 0,
  },
  numrReviews: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
