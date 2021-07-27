const Guarantee = require('../models/guarantee')

async function getAllGuarantee(req, res) {
  try {
    const docs = await Guarantee.find()

    const endeds = docs.filter((guarantee) => {
      return (
        new Date(guarantee.guaranteeEndDate).getTime() < new Date().getTime()
      )
    })

    if (endeds.length === 0) return res.status(201).json(docs)

    for (const ended of endeds) {
      await Guarantee.cancelGuarantee(ended._id, Guarantee)
    }

    const newdocs = await Guarantee.find()

    return res.status(201).json(newdocs)
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
  const _id = req.params.id
  const { id } = req.body

  Guarantee.updateMaintance(_id, id, true, Guarantee)
    .then((doc) => {
      res.status(200).json(doc)
    })
    .catch((err) => res.status(405).json(err))
}

async function updateGuarantee(req, res) {
  const _id = req.params.id
  const guarantee = req.body

  Guarantee.findOneAndUpdate({ _id: _id }, guarantee)
    .then((doc) => res.status(200).json(doc))
    .catch((err) => res.status(405).json(err))
}

async function finishGuarantee(req, res) {
  if (!req.params.id) return res.status(404)

  const doc = await Guarantee.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $set: {
        underGuarantee: false,
      },
    },
    { new: true }
  )
  if (!doc) return res.status(404)

  res.status(200).json(doc)
}

async function deleteGuarantee(req, res) {
  const _id = req.params.id
  try {
    const doc = await Guarantee.findByIdAndRemove({ _id })

    res.status(200).json({ _id: doc._id })
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

module.exports = {
  getAllGuarantee,
  addNewGuarantee,
  updateMaintance,
  updateGuarantee,
  finishGuarantee,
  deleteGuarantee,
}
