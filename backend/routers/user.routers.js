const express = require('express')
const verifyJWT = require('../utils/verify-jwt')
const { body, validationResult } = require('express-validator')
const userService = require('../services/user.service')

const routers = express.Router()

const userController = require('../controllers/user.controller')

routers.get('/users', verifyJWT, userController.get)
routers.post(
    '/signup',
    body('name').notEmpty().isLength({ min: 5 }),
    body('cpf').notEmpty().isLength({ min: 12 }),
    body('email')
        .notEmpty()
        .isEmail()
        .custom((value) => {
            return userService.findByEmail(value).then((user) => {
                if (user) {
                    return Promise.reject('E-mail ja foi utilizado')
                }
            })
        }),
    body('password').notEmpty().isLength({ min: 5 }),
    userController.post
)
routers.put('/users/:id', userController.put)
routers.delete('/users/:id', userController.delete)

module.exports = routers
