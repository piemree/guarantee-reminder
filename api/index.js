const express = require('express')
const { startDb } = require('./utils/database/starter')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

const warratyRoute = require('./routes/authRoutes/guaranteeRoute')
const publicRoutes = require('./routes/publicRoutes')
const tokenCheck = require('./middlewares/tokenCheckMiddleware')

const { port, connectionString } = require('./utils/secrets/secret')

app.use(morgan('tiny'))
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', function (req, res) {
  res.cookie('test', 'emo')
})

app.use('/', publicRoutes)

app.use('/guarantee', tokenCheck, warratyRoute)

startDb(connectionString)

module.exports = {
  path: '/api',
  handler: app,
}

// Start standalone server if directly running

/*   app.listen(port, () => {
    startDb(connectionString)
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
 */
