const express = require('express')

const routers = express.Router()

const glicoseController = require('../controllers/glicose.controller')

routers.post('/upload', glicoseController.uploadFile)

routers.get('/teste', glicoseController.get)

module.exports = routers
