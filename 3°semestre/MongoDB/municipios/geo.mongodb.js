use('estoque')
db.estados.find().forEach(function (estado) {
    db.estados.updateOne(
        {_id: estado._id},
        {$set:{
            local:{
                type:'Point',
                coordinates: [estado.longitude,estado.latitude]
            }
        },
    $unset:{latitude: "", longitude: ""}}
    )
    })

use('estoque')
db.estados.find({},{local: 1})

use('estoque')
//cirando o indice 2sSphere
db.estados.createIndex({local: '2dsphere'})

use('estoque')
//localizando os estados até 200 km proximos da fatec   
db.estados.find({
    local: {
        $near: {
            $geometry:{
                type:"Point",
                coordinates: [-47.4495,-23.5313]//fatec
            },
            $maxDistance: 2000000//em metros 200km
        }
    }
},{})

use('estoque')
db.municipios.find().forEach(function (municipios) {
    db.estados.updateOne(
        {_id: municipios._id},
        {$set:{
            local:{
                type:'Point',
                coordinates: [municipios.longitude,municipios.latitude]
            }
        },
    $unset:{latitude: "", longitude: ""}}
    )
    })

use('estoque')
db.municipios.find({},{local: 1})

