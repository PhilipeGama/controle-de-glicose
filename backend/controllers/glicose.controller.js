const moment = require('moment')
const glicoseService = require('../services/glicose.service')
const jwt = require('jsonwebtoken')

exports.get = async (req, res, next) => {
    try {
        const glicose = await glicoseService.findAll()
        return res.send(glicose)
    } catch (error) {
        return error
    }
}

exports.getPaginated = async (req, res, next) => {
    try {
        const userId = jwt.decode(req.headers['x-access-token']).id

        const glicose = await glicoseService.findAllPaginated(
            req.query,
            req.body,
            userId
        )

        return res.send(glicose)
    } catch (error) {
        return error
    }
}

exports.uploadFile = async (req, res, next) => {
    try {
        let str = req.files.file.data.toString('utf-8')

        const userId = jwt.decode(req.headers['x-access-token']).id

        str = str.split('\n').map((str) => {
            return str.split(',')
        })

        const glicoses = []

        for (let i = 1; i < str.length; i++) {
            if (str[i][0] === '') {
                break
            }
            const glicose = {
                examDate: new Date(str[i][1]),
                examHour: str[i][2],
                nivel: parseInt(str[i][3]),
                userId: userId,
            }

            glicoses.push(glicose)
        }

        const saveGlicose = await glicoseService.save(glicoses)
        res.send(saveGlicose)
    } catch (error) {
        res.send(error)
    }
}

exports.sendGlucosesByEmail = async (req, res, next) => {
    try {
        const result = await glicoseService.sendGlucosesByEmail()
        res.send(result)
    } catch (error) {
        return error
    }
}
