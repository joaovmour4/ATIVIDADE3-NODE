const bancoSchema = require('../schemas/bancoSchema')

module.exports = class bancoController{
    static async getBanco(req, res){
        const {id} = req.params

        const banco = await bancoSchema.findByPk(id)
        if(banco){
            return res.status(200).json({message: 'Banco retornado:', banco})
        }
    }
}   
