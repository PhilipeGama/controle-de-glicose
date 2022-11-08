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
    datahora: {
        type: Sequelize.DATE,
    },
    // hora: {
    //     type: Sequelize.STRING,
    //     unique: false,
    //     allowNull: false,
    // },
    nivel: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
})

module.exports = Glicose
