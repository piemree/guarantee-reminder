const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  count: { type: Number, default: 1 },
  amount: { type: Number, default: 0 },
});

module.exports = productSchema;
