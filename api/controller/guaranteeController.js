const Guarantee = require('../models/guarantee')

async function getAllGuarantee(req, res) {
  try {
    const doc = await Guarantee.find()
    res.status(201).json(doc)
  } catch (error) {
    res.send(error)
  }
}

async function addNewGuarantee(req, res) {
  const guarantee = new Guarantee(req.body)

  try {
    const doc = await guarantee.save()
    res.status(201).json(doc)
  } catch (error) {
    res.send(error)
  }
}

async function updateMaintance(req, res) {
  const { _id, maintance } = req.body

  Guarantee.updateMaintance(_id, maintance._id, maintance.checked, Guarantee)
    .then((doc) => res.status(200).json(doc))
    .catch((err) => res.status(405).json(err))
}

async function deleteGuarantee(req, res) {
  const _id = req.params.id
  try {
    const doc = await Guarantee.findByIdAndRemove({_id})

    res.status(200).json({_id:doc._id})
    
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

module.exports = {
  getAllGuarantee,
  addNewGuarantee,
  updateMaintance,
  deleteGuarantee,
}
