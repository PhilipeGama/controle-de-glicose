const express = require('express')

const routers = express.Router()

const authController = require('../controllers/auth.controller')
const { body } = require('express-validator')

routers.post(
    '/singin',
    body('email').notEmpty().isEmail(),
    body('password').notEmpty(),
    authController.login
)

module.exports = routers
