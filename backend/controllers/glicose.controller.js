const glicoseService = require('../services/glicose.service')

exports.get = async (req, res, next) => {
    const glicose = await glicoseService.findAll()
    return res.send(glicose)
}

exports.uploadFile = async (req, res, next) => {
    let str = req.files.file.data.toString('utf-8')

    str = str.split('\n').map((str) => {
        return str.split(',')
    })

    const glicoses = []

    for (let i = 1; i < str.length; i++) {
        if (str[i][0] === '') {
            break
        }
        const glicose = {
            data: str[i][1],
            hora: str[i][2],
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
