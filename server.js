const express = require('express')
const routes = require('./routes/routes')
const db = require('./schemas/db')
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)
app.use(express.urlencoded({extended:true}))


db.sync()

app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})