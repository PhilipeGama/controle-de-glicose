const express = require('express')
require('dotenv').config()
const sequelize = require('./utils/database')
const bodyParser = require('body-parser')

const app = express()

const userRoutes = require('./routers/user.routers')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const PORT = process.env.PORT

app.use(userRoutes)

app.listen(PORT, () => {
    console.log(`Running on ${PORT} ...`)
})

sequelize.sync().then((result) => {})
