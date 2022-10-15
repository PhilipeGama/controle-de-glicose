const express = require('express')

const router = express.Router()

const userController = require('../controllers/user.controller')

router.get('/users', userController.findUsers)

router.post('/users', userController.createUser)

module.exports = router
