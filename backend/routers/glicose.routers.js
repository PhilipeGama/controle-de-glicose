const express = require('express')

const routers = express.Router()

const glicoseController = require('../controllers/glicose.controller')

routers.post('/upload', glicoseController.uploadFile)

routers.get('/glucoses', glicoseController.get)

routers.post('/glucoses-paginated', glicoseController.getPaginated)

routers.get('/send-glucoses-by-email', glicoseController.sendGlucosesByEmail)

module.exports = routers
