const Glicose = require('../models/glicose.model')

exports.save = async (glicose) => {
    try {
        return await Glicose.bulkCreate(glicose)
    } catch (error) {
        console.log(error)
        return error
    }
}

exports.findAll = async () => {
    try {
        return await Glicose.findAll()
    } catch (error) {
        console.log(error)
        return error
    }
}

exports.findAllPaginated = async () => {
    try {
        return await Glicose.findAndCountAll({
            limit: 5,
            offset: 10,
        })
    } catch (error) {
        console.log(error)
        return error
    }
}
