const mongoose = require('mongoose')
const customerSchema = require('./customer')
const maintenceSchema = require('./maintence')
const updateMaintance = require('../utils/database/updateMaintance')
const cancelGuarantee = require('../utils/database/cancelGuarantee')
const guaranteePreSave = require('../utils/database/guaranteePreSave')

const guaranteeSchema = new mongoose.Schema(
  {
    customer: customerSchema,
    maintances: [maintenceSchema],
    subject: { type: String, required: true },
    maintance:maintenceSchema,
    underGuarantee: { type: Boolean, default: true },
    maintancePeriod: { type: Number, required: true },
    guaranteePeriod: { type: Number, required: true },
    guaranteeEndDate: { type: Date, default: new Date() },
  },
  { timestamps: true }
)

guaranteeSchema.statics.updateMaintance = updateMaintance
guaranteeSchema.statics.cancelGuarantee = cancelGuarantee

guaranteeSchema.pre('save',guaranteePreSave)

module.exports = mongoose.model('Guarantee', guaranteeSchema)
