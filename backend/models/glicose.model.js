const Sequelize = require('sequelize')

const sequelize = require('../utils/database')

const Glicose = sequelize.define('glicose', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    data: Sequelize.STRING,
    hora: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
    },
    nivel: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
})

module.exports = Glicose
