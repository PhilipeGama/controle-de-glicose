const Sequelize = require('sequelize')

const sequelize = require('../utils/database')

const Glicose = sequelize.define('glicose', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
    userId: {
        type: Sequelize.INTEGER,
    },
})

module.exports = Glicose
