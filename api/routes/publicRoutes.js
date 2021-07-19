const express = require('express')
const router = express.Router()
const loginMiddleware = require('../middlewares/loginMiddleware')

const { login } = require('../controller/authController')

router.post('/login', loginMiddleware, login)


module.exports = router
