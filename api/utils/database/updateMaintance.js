/**
 *
 * @param {import("mongoose").ObjectId} _id
 * @param {import("mongoose").ObjectId} maintanceId
 * @param {Boolean} value
 * @param {improt("mongoose").Schema} Schema
 */
module.exports = async function (_id, maintanceId, value, Schema) {
  const doc = await Schema.findOneAndUpdate(
    {
      _id: _id,
      'maintances._id': maintanceId,
    },
    {
      $set: {
        'maintances.$.checked': value,
      },
    },
    { new: true }
  )

  const filtered = doc.maintances.filter((m) => m.checked === false)

  const nextMaintance = filtered.sort(
    (a, b) =>
      parseInt(new Date(a.date).getTime()) -
      parseInt(new Date(b.date).getTime())
  )[0]

  if (nextMaintance)
    return await Schema.findOneAndUpdate(
      {
        _id: _id,
      },
      {
        $set: {
          'maintance.date': new Date(nextMaintance.date),
        },
      },
      { new: true }
    )

  return await Schema.findOneAndUpdate(
    {
      _id: _id,
    },
    {
      $set: {
        'maintance.checked': true,
      },
    },
    { new: true }
  )
}
