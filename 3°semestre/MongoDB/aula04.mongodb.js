// metodo sort() 
//metodo count()  
//metodo limit() é utilizado para limitar o nomeru de documentos retornados.
//metodo skip() é usado para pular um certo numero de documentos na coleção. 

use('estoque')
db.estados.find().count()

use ('estoque')
db.estados.find({},{uf:1,nome:1,_id:0})
            .sort(nome:1)