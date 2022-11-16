const Sequelize = require('sequelize')

const sequelize = require('../utils/database')

const Glicose = sequelize.define('glicose', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cpf: {
        type: Sequelize.STRING,
    },
    examDate: {
        type: Sequelize.DATEONLY,
    },
    examHour: {
        type: Sequelize.STRING,
    },
    nivel: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
})

module.exports = Glicose
