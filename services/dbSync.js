module.exports = (async ()=>{
    const db = require('../schemas/db')
    const Banco = require('../schemas/bancoSchema')

    try{
        const resultado = await db.sync()
        console.log(resultado)
    }catch(err){
        console.log(err)
    }
})