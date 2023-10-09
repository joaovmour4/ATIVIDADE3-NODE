const express = require('express')
const router = express.Router()
const bancoController = require('../controllers/bancoController')

router.get('/bancos/:id', bancoController.getBanco)
router.get('/bancos', bancoController.getBancos)
router.post('/financiamento', bancoController.simularFinan)


module.exports = router