const express = require('express')
const fileUpload = require('express-fileupload')
var cors = require('cors')

require('dotenv').config()
const sequelize = require('./utils/database')
const bodyParser = require('body-parser')
const PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(fileUpload())

const userRoutes = require('./routers/user.routers')
const authRoutes = require('./routers/auth.routers')
const glicoseRoutes = require('./routers/glicose.routers')
const User = require('./models/user.model')
const Glicose = require('./models/glicose.model')

app.use(userRoutes)
app.use(authRoutes)
app.use(glicoseRoutes)

app.listen(PORT, () => {
    console.log(`Running on ${PORT} ...`)
})

User.hasMany(Glicose)
Glicose.belongsTo(User, { foreignKey: 'userId' })

sequelize.sync()
