const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: String, required: true },
    phone: {
      type: String,
      required: true,
    },
    address: { type: String, required: false },
  },

);

module.exports = customerSchema
