//tipos de obejetos
//String, Number, boolean, Date, ObjectID
//array, Object

use("estoque")
db.categorias.insertOne({nome:'bebidas',
    ativo:true
})

//select * from 

use('estoque')
db.categorias.find()

use('estoque')
db.categorias.insertOne({_id: '123',
    nome:'sobremesa',
    ativo:true
})

use('estoque')
db.categorias.insertMany([
    {nome:'entradas', ativo:true},
    {nome:'pães', ativo:false}
])

use('estoque')
db.produtos.insertOne({
    _id:'1234',
    nome: 'hamburguer Gourmet',
    preco: 35.99,
    ingredientes: ['pão','carne','queijo','alface','tomate'],
    vegetariano: false,
    dataCadastro: new Date(),
    calorias:{
        total: 780,
        porcoes: 1
    }
    })

    use('estoque')
    db.produtos.find()
    
    use('estoque')
    db.produtos.drop() //apaga a collection

    db.createCollection('produtos',{
        validator: {
            $jsonSchema: {
                'bsonType':'object',
                'required':['_id','nome','preco','ingredientes','vegetariano','dataCadastro']
            }
        }
    })

    //Obter as informações da collection
    use('estoque')
    db.getCollectionInfos({name:'produtos'})

    use('estoque')
    try{
        db.produtos.insertOne({abobrinha:'tem'})
    } catch (err){
        printjson(err)
    }

    use('estoque')
    db.estados.insertMany([
        {sigla: 'sp',nome:'São Paulo',populacao: 12000000},
        {sigla: 'AC',nome:'Acre', populacao: 712000},
        {sigla: 'RJ',nome:'Rio de Janeiro',populacao: 2500000}
    ])

    use('estoque')
    db.estados.find({}, //filtros
                    {}  //atributos a serem exibidos
    )

    // selec id, nome from estados where sigla = 'SP'
    use('estoque')
    db.estados.find({sigla: {$eq: 'sp'}},{_id:0, nome:1})

    // i = insensitive case , $ = que termine , ^ = que inicie
    use('estoque')
    db.estados.find({nome: /paulo/i},{_id:0, nome:1})

    use('estoque')
    db.estados.find({nome: /^rio/i},{_id:0, nome:1})

    use('estoque')
    db.estados.find({nome: /paulo$/i},{_id:0, nome:1})

    //select * from estados where populacao >= 10000000
    use("estoque")
    db.estados.find({populacao: {$gte: 10000000}})

    //select * from estados where populacao <= 12000000
    use("estoque")
    db.estados.find({populacao:{$lt:12000000}})

    //select * from estados where sigla in ('AC','RJ')
    use('estoque')
    db.estados.find({sigla: {$in:['AC','RJ']}})

     //select * from estados where sigla not in ('AC','RJ')
     use('estoque')
     db.estados.find({sigla: {$nin:['AC','RJ']}})

     //select * from estados where sigla = 'RJ' or sigla = 'AC'
     use('estoque')
     db.estados.find({
        $or : [
            {sigla: {$eq:'RJ'}},
            {sigla: {$eq:'AC'}}
        ]
     },{sigla:1,nome:1})

     //delete
     use('estoque')
     // db.estados.deleteOne({sigla:'AC'})
     db.estados.deleteOne({sigla: {$eq:'AC'}})

     use("estoque")
     db.estados.deleteMany({nome: /o/i})

     //update
     use("estoque")
     db.estados.updateOne({sigla: {$eq: 'AC'}},
        {$set: {populacao: 1000}}
     )
     use("estoque")
     db.estados.find({sigla :'AC'})

     use("estoque")
     db.estados.updateMany({nome: /o/i},
        {$set : {pais: 'Brasil'}}
     )
     use('estoque')
     db.estados.find()