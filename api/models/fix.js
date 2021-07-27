const mongoose = require('mongoose')

const fixSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: String, required: true },
    subject: { type: String, required: true },
    price: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Fix', fixSchema)
