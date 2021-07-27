const express = require('express')
const router = express.Router()
const maintenanceMiddleware = require('../../middlewares/maintenanceMiddleware')

const {
  getAllGuarantee,
  addNewGuarantee,
  updateMaintance,
  deleteGuarantee,
  finishGuarantee
} = require('../../controller/guaranteeController')

router.get('/', getAllGuarantee)

router.post('/add', addNewGuarantee)

router.put('/updateMaintanence/:id', updateMaintance)

router.put('/finishGuarantee/:id', finishGuarantee)

router.delete('/delete/:id', deleteGuarantee)

module.exports = router
