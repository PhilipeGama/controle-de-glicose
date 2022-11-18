const Glicose = require('../models/glicose.model')
const { Parser } = require('json2csv')
var fs = require('fs')

exports.save = async (glicose) => {
    try {
        return await Glicose.bulkCreate(glicose)
    } catch (error) {
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

exports.findAllPaginated = async (params, body, cpf) => {
    try {
        const { page, limit } = params
        const { examDate, examHour } = body
        let result
        let filterObj

        filterObj = {
            ...filterObj,
            cpf: cpf,
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
        return error
    }
}

exports.sendGlucosesByEmail = async () => {
    const fields = ['id', 'cpf', 'examDate', 'examHour', 'nivel']
    const opts = { fields }

    try {
        const result = await Glicose.findAll()

        const parser = new Parser(opts)
        const csv = parser.parse(result)

        const filename = 'csv1.csv'
        fs.writeFile('./exports/' + filename, csv, function (err) {
            if (err) throw err
            let message = {
                attachments: [
                    {
                        filename: '',
                    },
                ],
            }
        })

        return csv
    } catch (err) {
        console.error(err)
    }
}
