const express = require('express')
const fileUpload = require('express-fileupload')

require('dotenv').config()
const sequelize = require('./utils/database')
const bodyParser = require('body-parser')
const PORT = process.env.PORT
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(fileUpload())

const userRoutes = require('./routers/user.routers')
const authRoutes = require('./routers/auth.routers')
const glicoseRoutes = require('./routers/glicose.routers')

app.use(userRoutes)
app.use(authRoutes)
app.use(glicoseRoutes)

app.listen(PORT, () => {
    console.log(`Running on ${PORT} ...`)
})

sequelize.sync().then((result) => {})
