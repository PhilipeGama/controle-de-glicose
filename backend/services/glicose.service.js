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
        return error
    }
}

exports.findAllPaginated = async (params, body) => {
    try {
        const { page, limit } = params
        const { cpf, examDate, examHour } = body
        let result
        let filterObj

        if (cpf) {
            filterObj = {
                ...filterObj,
                cpf: cpf,
            }
        }

        if (examDate) {
            filterObj = {
                ...filterObj,
                examDate,
            }
        }

        if (examHour) {
            filterObj = {
                ...filterObj,
                examHour,
            }
        }

        result = await Glicose.findAndCountAll({
            limit: parseInt(limit),
            offset: parseInt(page * limit),
            where: {
                ...filterObj,
            },
        })

        let resultRows = []

        if (result.rows) {
            resultRows = result.rows
        }

        const data = {
            data: resultRows,
            meta: {
                totalItems: result.count,
                itemsPerPage: parseInt(limit),
                currentPage: parseInt(page),
                totalPage: parseInt(result.count / limit),
            },
        }
        return data
    } catch (error) {
        console.log(error)
    }
}
