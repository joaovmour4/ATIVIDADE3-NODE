const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/atv3-db', {dialect: 'postgres'})

module.exports = sequelize