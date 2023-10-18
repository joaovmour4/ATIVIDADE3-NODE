require('dotenv').config()

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

const Sequelize = require('sequelize')
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/atv3-db`, {
    dialect: 'postgres'
})

module.exports = sequelize