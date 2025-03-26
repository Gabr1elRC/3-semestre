import express from 'express'
import fs from 'fs'

const app = express()
app.use(express.json())//parse do json
// //rota publica
app.use('/', express.static('public'))
//define o favicon
app.use('/favicon.ico', express.static('public/img/logo.png'))
//listen
app.listen(3000, function(){
    console.log('servidor rodando!')
})

