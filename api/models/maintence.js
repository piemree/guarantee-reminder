const mongoose = require("mongoose");

const maintenceSchema = new mongoose.Schema({
  date: { type: Date },
  checked: { type: Boolean, default: false },
});

module.exports = maintenceSchema;
