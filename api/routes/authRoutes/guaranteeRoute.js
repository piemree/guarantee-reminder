const express = require('express')
const router = express.Router()
const Guarantee = require('../../models/guarantee')

const {
  getAllGuarantee,
  addNewGuarantee,
  updateMaintance,
  deleteGuarantee
} = require('../../controller/guaranteeController')


router.get('/', getAllGuarantee)

router.post('/add', addNewGuarantee)

router.put('/update', updateMaintance )

router.delete("/delete/:id",deleteGuarantee)
module.exports = router
