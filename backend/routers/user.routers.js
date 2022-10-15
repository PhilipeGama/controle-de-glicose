const express = require('express')

const routers = express.Router()

const userController = require('../controllers/user.controller')

routers.get('/users', userController.getUsers)
routers.post('/users', userController.postUser)
routers.put('/users/:id', userController.putUser)
routers.delete('/users', userController.deleteUser)

module.exports = routers
