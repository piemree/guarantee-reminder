const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

const { startDb } = require('./utils/database/starter')

const guaranteeRoute = require('./routes/authRoutes/guaranteeRoute')
const fixRoute = require('./routes/authRoutes/fixRoute')

const publicRoutes = require('./routes/publicRoutes')
const tokenCheck = require('./middlewares/tokenCheckMiddleware')

const { port, connectionString } = require('./utils/secrets/secret')

app.use(helmet())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', publicRoutes)
app.use('/guarantee', tokenCheck, guaranteeRoute)
app.use('/fix', tokenCheck, fixRoute)

startDb(connectionString)

module.exports = {
  path: '/api',
  handler: app,
}
