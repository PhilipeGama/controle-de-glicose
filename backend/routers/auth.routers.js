const express = require('express')

const routers = express.Router()

const authController = require('../controllers/auth.controller')

routers.post('/singin', authController.login)

module.exports = routers