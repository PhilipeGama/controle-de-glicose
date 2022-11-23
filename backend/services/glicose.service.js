const Glicose = require('../models/glicose.model')
const { Parser } = require('json2csv')
const { Op } = require('sequelize')
require('dotenv').config()

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

exports.findAllQt = async (id) => {
    try {
        const glucose_LT75 = await Glicose.count({
            where: {
                userId: id,
                nivel: {
                    [Op.lte]: 70,
                },
            },
        })

        const glucose_LT99 = await Glicose.count({
            where: {
                userId: id,
                nivel: {
                    [Op.and]: [{ [Op.gt]: 70 }, { [Op.lt]: 99 }],
                },
            },
        })

        const glucose_GT99_LT125 = await Glicose.count({
            where: {
                userId: id,
                nivel: {
                    [Op.and]: [{ [Op.gte]: 99 }, { [Op.lte]: 125 }],
                },
            },
        })

        const glucose_GT126 = await Glicose.count({
            where: {
                userId: id,
                nivel: {
                    [Op.gte]: 126,
                },
            },
        })

        const glucose_TOT = await Glicose.count({
            where: {
                userId: id,
            },
        })

        return {
            glucose_LT75,
            glucose_LT99,
            glucose_GT99_LT125,
            glucose_GT126,
            glucose_TOT,
        }
    } catch (error) {
        return error
    }
}

exports.findAllPaginated = async (params, body, userId) => {
    try {
        const { page, limit } = params
        const { examDate, examHour } = body
        let result
        let filterObj

        filterObj = {
            ...filterObj,
            userId: userId,
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
                totalItems: Math.ceil(result.count),
                itemsPerPage: Math.ceil(limit),
                currentPage: Math.ceil(page),
                totalPage: Math.ceil(result.count / limit),
            },
        }
        return data
    } catch (error) {
        return error
    }
}

const nodemailer = require('nodemailer')

exports.sendGlucosesByEmail = async (email, id) => {
    const fields = ['id', 'examDate', 'examHour', 'nivel']
    const opts = { fields }

    try {
        const result = await Glicose.findAll({
            where: {
                userId: id,
            },
        })

        const parser = new Parser(opts)
        const csv = parser.parse(result)

        let message = {
            attachments: [
                {
                    filename: 'glicoses.csv',
                    content: csv,
                },
            ],
        }

        console.log(process.env.EMAIL_USERNAME)
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        })

        let info = await transporter.sendMail({
            from: '"Arquivos de glicoses"', // sender address
            to: `${email}`, // list of receivers
            subject: 'Medição da glicose', // Subject line
            text: 'Segue o anexo', // plain text body
            html: '<h4>Segue o anexo</h4>', // html body
            attachments: message.attachments,
        })

        console.log('Message sent: %s', info.messageId)
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

        return 'csv'
    } catch (err) {
        console.log(err)
        return error
    }
}
