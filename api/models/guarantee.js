const mongoose = require("mongoose");
const customerSchema= require("./customer")
const productSchema= require("./product")
const maintenceSchema= require("./maintence")
const updateMaintance = require("../utils/database/updateMaintance")
const guaranteePreSave = require("../utils/database/guaranteePreSave")

const guaranteeSchema = new mongoose.Schema({
  products: [productSchema],
  customer: customerSchema,
  vat: { type: Number, default: 18 },
  vatPrice: { type: Number, default: 0 },
  subtotal: { type: Number, default: 0 },
  total: { type: Number, default: 0 },
  maintances: [maintenceSchema],
  underGuarantee: { type: Boolean, default: true },
  maintancePeriod: { type: Number, required: true },
  guaranteePeriod: { type: Number, required: true },
  guaranteeEndDate: { type: Date, default: new Date() },
},{timestamps:true});

guaranteeSchema.statics.updateMaintance=updateMaintance

guaranteeSchema.pre("save",guaranteePreSave)


module.exports = mongoose.model("Guarantee", guaranteeSchema);
