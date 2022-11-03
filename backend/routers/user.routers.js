const express = require('express')
const verifyJWT = require('../utils/verify-jwt')

const routers = express.Router()

const userController = require('../controllers/user.controller')

routers.get('/users', verifyJWT, userController.get)
routers.post('/signup', userController.post)
routers.put('/users/:id', userController.put)
routers.delete('/users/:id', userController.delete)

module.exports = routers
