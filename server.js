const express = require('express')
const routes = require('./routes/routes')

(async () => {
    const database = require('./schemas/db');
    const Banco = require('./schemas/bancoSchema');
 
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();


const app = express()
app.use(routes)
app.use(express.json())

app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})