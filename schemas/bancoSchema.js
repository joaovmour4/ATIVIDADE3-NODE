const Sequelize = require('sequelize')
const db = require('./db')

const Banco = db.define('bank', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    anual_interest_rate:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    max_installments:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Banco
