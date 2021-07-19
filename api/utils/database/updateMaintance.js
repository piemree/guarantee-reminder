/**
 *
 * @param {import("mongoose").ObjectId} _id
 * @param {import("mongoose").ObjectId} maintanceId
 * @param {Boolean} value
 * @param {improt("mongoose").Schema} Schema
 */
module.exports = async function (_id, maintanceId, value, Schema) {
  return await Schema.findOneAndUpdate(
    {
      _id: _id,
      "maintances._id": maintanceId,
    },
    {
      $set: {
        "maintances.$.checked": value,
      },
    },
    { new: true }
  );
};
