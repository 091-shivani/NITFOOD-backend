const mongoose = require("mongoose");

// Define the schema for the document
const dishSchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  options: {
    half: {
      type: String,
      required: true,
    },
    full: {
      type: String,
      required: true,
    },
  },

  description: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// Create a model using the schema

module.exports = mongoose.model("foodItem", dishSchema, "foodItems");
