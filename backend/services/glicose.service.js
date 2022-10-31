const Glicose = require('../models/glicose.model')

exports.save = async (glicose) => {
    try {
        return await Glicose.bulkCreate(glicose)
    } catch (error) {
        return error
    }
}
