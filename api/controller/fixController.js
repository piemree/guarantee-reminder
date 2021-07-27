const Fix = require('../models/fix')

async function getAllFixes(req, res) {
  try {
    const docs = await Fix.find()

    return res.status(201).json(docs)
  } catch (error) {
    res.send(error)
  }
}

async function addNewFix(req, res) {
  const fix = new Fix(req.body)

  try {
    const doc = await fix.save()
    res.status(201).json(doc)
  } catch (error) {
    res.send(error)
  }
}

async function deleteFix(req, res) {
  const _id = req.params.id
  try {
    const doc = await Fix.findByIdAndRemove({ _id })

    res.status(200).json({ _id: doc._id })
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

module.exports = { getAllFixes, addNewFix, deleteFix }
