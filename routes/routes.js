const express = require('express')
const router = express.Router()
const bancoController = require('../controllers/bancoController')

router.get('/bancos/:id', bancoController.getBanco)

module.exports = router