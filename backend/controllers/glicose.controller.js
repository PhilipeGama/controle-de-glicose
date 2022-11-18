const moment = require('moment')
const glicoseService = require('../services/glicose.service')
const jwt = require('jsonwebtoken')

exports.get = async (req, res, next) => {
    const glicose = await glicoseService.findAll()
    return res.send(glicose)
}

exports.getPaginated = async (req, res, next) => {
    const token = req.headers.authoraization.split(' ')[1]
    const cpf = jwt.decode(token).cpf
    const glicose = await glicoseService.findAllPaginated(
        req.query,
        req.body,
        cpf
    )
    return res.send(glicose)
}

exports.uploadFile = async (req, res, next) => {
    let str = req.files.file.data.toString('utf-8')

    const token = req.headers.authoraization.split(' ')[1]
    const cpf = jwt.decode(token).cpf

    str = str.split('\n').map((str) => {
        return str.split(',')
    })

    const glicoses = []

    for (let i = 1; i < str.length; i++) {
        if (str[i][0] === '') {
            break
        }
        const glicose = {
            cpf: cpf,
            examDate: new Date(str[i][1]),
            examHour: str[i][2],
            nivel: parseInt(str[i][3]),
        }

        glicoses.push(glicose)
    }
    try {
        const saveGlicose = await glicoseService.save(glicoses)
        res.send(saveGlicose)
    } catch (error) {
        res.send(error)
    }
}

exports.sendGlucosesByEmail = async (req, res, next) => {
    const result = await glicoseService.sendGlucosesByEmail()
    res.send(result)
}
