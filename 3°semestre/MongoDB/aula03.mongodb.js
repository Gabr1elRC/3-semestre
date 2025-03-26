use('estoque')
const usuarios = [{nome: 'jose', idade:22, sexo:'M', hobbies:["surf","animes"]},
                 {nome:"Maria", idade:24, sexo:"F", hobbies:["judo", "volley"]}]
db.usuarios.insertMany(usuarios)

use('estoque')
db.usuarios.find()

use('estoque')
db.usuarios.updateOne({nome: {$eq: "Maria"}},
    {$set: {nome: "Maria Silva"}}
)

//Para incrementar ou decrementar um valor na alteração
use("estoque")
db.usuarios.updateMany({},
    {$inc: {idade: +1}}
)

//$push - adiciona um novo elemento a um array
use("estoque")
db.usuarios.updateOne({nome: "jose"},{$push: {hobbies: "fotografia"}}
)