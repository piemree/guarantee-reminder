const express = require('express')
const router = express.Router()

const {
  getAllGuarantee,
  addNewGuarantee,
  updateMaintance,
  deleteGuarantee
} = require('../../controller/guaranteeController')


router.get('/', getAllGuarantee)

router.post('/add', addNewGuarantee)

router.put('/update/:id', updateMaintance )

router.delete("/delete/:id",deleteGuarantee)

module.exports = router
