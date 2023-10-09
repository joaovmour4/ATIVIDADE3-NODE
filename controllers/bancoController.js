const bancoSchema = require('../schemas/bancoSchema')

module.exports = class bancoController{
    static async getBanco(req, res){
        try{
            const {id} = req.params

            const banco = await bancoSchema.findByPk(Number(id))
            if(banco){
                return res.status(200).json({message: 'Banco retornado:', banco})
            }
        }catch(err){
            return res.status(400).json({message: err.message})
        }
    }

    static async getBancos(req, res){
        try{
            const bancos = await bancoSchema.findAll({attributes: ['id', 'name']})
            if(bancos){
                return res.status(200).json({message: bancos})
            }
        }catch(err){
            return res.status(400).json({message: err.message})
        }
    }

    static async simularFinan(req, res){
        try{
            const {bankId, totalValue} = req.body
            let {parcelas} = req.body

            const bank = await bancoSchema.findByPk(Number(bankId))
            if(bank && totalValue > 0 && parcelas > 0){
                parcelas = parcelas > bank.max_installments ? bank.max_installments : parcelas
                const totalTax = totalValue*(((parcelas/12)*bank.anual_interest_rate)/100+1)
                const mensalValue = totalTax/parcelas
                return res.status(200).json({
                    valor_total: totalTax,
                    valor_mensal: mensalValue
                })
            }else{
                return res.status(400).json({message: 'Dados inválidos.'})
            }

        }catch(err){
            return res.status(500).json({message: err.message})
        }
    }
}   
