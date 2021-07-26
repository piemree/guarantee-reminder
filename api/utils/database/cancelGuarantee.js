/**
 *
 * @param {import("mongoose").ObjectId} _id
 * @param {Boolean} value
 * @param {improt("mongoose").Schema} Schema
 */
module.exports = async function (_id, Schema) {
  return await Schema.findOneAndUpdate(
    { _id: _id },
    { underGuarantee: false },
    { new: true }
  )
}
