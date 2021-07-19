const mongoose = require("mongoose");
const customerSchema = require("./customer")

const fixSchema = new mongoose.Schema({
  customer:customerSchema,
  fixMessage: { type: String, required: [true, "Tamir mesaji gerekli."] },
},{timestamps:true});

module.exports = mongoose.model("Fix", fixSchema);
