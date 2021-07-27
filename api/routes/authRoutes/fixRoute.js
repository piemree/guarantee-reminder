const express = require('express')
const router = express.Router()

const { getAllFixes, addNewFix,deleteFix } = require('../../controller/fixController')

router.get('/', getAllFixes)

router.post('/add', addNewFix)

router.delete('/delete/:id', deleteFix)

module.exports = router
