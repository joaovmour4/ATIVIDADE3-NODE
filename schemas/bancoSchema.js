const Sequelize = require('sequelize')
const {DataTypes} = require('sequelize')
const db = require('./db')

const Banco = db.define('bank', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    anual_interest_rate:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    max_installments:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = Banco
