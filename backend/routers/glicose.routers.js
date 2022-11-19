const express = require('express')

const routers = express.Router()

const glicoseController = require('../controllers/glicose.controller')

routers.post('/upload', verifyJWT, glicoseController.uploadFile)

routers.get('/glucoses', verifyJWT, glicoseController.get)

routers.post('/glucoses-paginated', verifyJWT, glicoseController.getPaginated)

routers.get(
    '/send-glucoses-by-email',
    verifyJWT,
    glicoseController.sendGlucosesByEmail
)

module.exports = routers
