const express = require('express')

const routers = express.Router()

const glicoseController = require('../controllers/glicose.controller')

routers.post('/upload', glicoseController.uploadFile)

routers.get('/glicoses', glicoseController.get)

routers.post('/glicoses-paginated', glicoseController.getPaginated)

module.exports = routers
