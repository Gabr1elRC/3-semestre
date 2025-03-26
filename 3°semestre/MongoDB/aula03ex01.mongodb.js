use("estoque")
const funcionarios = [{nome: "João Silva", cargo: "desenvolvedor", sexo:"Masculino", salario:5000, departamento:"TI",
    dataContratação: new Date("2023-01-01"), projetos: ["projetos A","projeto B"], dataCadastro: new Date()},
                {nome:"Maria Santos", cargo:"Analista de dados", sexo:"feminino", salario:4800, departamento:"TI",
                    dataContratação: new Date("2023-06-15"), projeto:["Projeto C"], dataCadastro:new Date()
                 },
                 {nome:"Caros Oliveira", cargo:"Desenvolvedor",sexo:"masculino",salario:5100,departamento:"TI",
                    dataContratação:new Date("2022-03-10"), projetos:["projeto B"], dataContratação:new Date()
                 },
                 {nome:"Ana Pereira",cargo:"Gerente de Projetos",sexo: "Feminino", 
                    salario: 7500, 
                    departamento: "Gestão", 
                    dataContratacao: new Date("2021-09-20"), 
                    projetos: ["Projeto A", "Projeto C"], 
                    dataCadastro: new Date() 
                     }, 
                     { 
                    nome: "Luis Fernandes", 
                    cargo: "Contador", 
                    sexo: "Masculino", 
                    salario: 4200, 
                    departamento: "Contabilidade", 
                    dataContratacao: new Date("2020-11-05"), 
                    projetos: [], 
                    dataCadastro: new Date() 
                     }, 
                     { 
                    nome: "Luiza Costa", 
                    cargo: "Analista Financeira", 
                    sexo: "Feminino", 
                    salario: 4600,departamento: "Financeiro", 
                    dataContratacao: new Date("2023-04-18"), 
                    projetos: ["Projeto D"], 
                    dataCadastro: new Date() },
                    {nome: "João Souza", 
                        cargo: "Desenvolvedor", 
                        sexo: "Masculino", 
                        salario: 4900, 
                        departamento: "TI", 
                        dataContratacao: new Date("2023-07-01"), 
                        projetos: ["Projeto A"], 
                        dataCadastro: new Date() }
]
db.funcionarios.insertMany(funcionarios)

//Exercicio 02:
use("estoque")
db.funcionarios.insertOne({
    nome:"Gabriel Correa",
    Cargo:"desenvolvedor",
    Salario:3000,departamento: "TI",
    dataContratação: new Date("2024-05-10"),
    projetos:["projeto A"],
    dataCadastro:new Date()
})

//Exercicio 03:
use("estoque")
db.funcionarios.updateMany({},{$inc: {salario: +100}})

//exercicio 04:

use("estoque")
db.funcionarios.updateOne({nome:{$eq: "João Silva"}},{$set:{projetos:"Projeto C"}})

//exercicio 05:
use("estoque")
db.funcionarios.updateMany({
    $unset:{dataContratação}
})

//exercicio 06:
use("estoque")
db.funcionarios.updateMany(
    {departamento:"TI"},
    {$set:{bonificação: 500}}
)

//exercicio 07:
use("estoque")
db.funcionarios.deleteOne({
    nome:"João Silva"
})

//exercicio 08:
use("estoque")
db.funcionarios.deleteMany({
    departamento:"Contabilidade"
})

//exercicio 09:
use("estoque")
db.funcionarios.find({cargo:/desenvolvedor/i},{nome:1,sexo:1,salario:1,cargo:1})

//exercicio 10:
use("estoque")
db.funcionarios.find({
    salario:{$gt:4000}
})

//exercicio 11:
use("estoque")
db.funcionarios.find({
    dataContratação:{$gte: new Date("2023=01-01"), $lt: new Date("2024-01-01")}
})

//exercicio 12:
use("estoque")
db.funcionarios.find({
    projetos:{$in:["Projeto A","Projeto B"]}
})

//exercicio 13:
use("estoque")
db.funcionarios.find({ 
    projetos: { $ne: "Projeto B" } 
})
 
//Exercicio 14:
use("estoque")
db.funcionarios.find({ 
    sexo: "Feminino" }, { _id: 0, nome: 1, salario: 1, departamento: 1, sexo: 1 

})
 
//exercicio 15:
use("estoque")
db.funcionarios.find({ 
    dataContratacao: { $lt: new Date("2023-01-01") }, salario: { $lt: 5000 } 
})
 
//exercicio 16:
use("estoque")
db.funcionarios.find({ projetos: { $size: { $gt: 1 } } });
 
//exercicio 17:
use("estoque")
db.funcionarios.find({ dataCadastro: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } });
 
//exercicio 18:
use("estoque")
db.funcionarios.find({ nome: /^João/ });
 
//exercicio 19:
use("estoque")
db.funcionarios.find({ nome: /Silva$/ });
 
//exercicio 20:
use("estoque")
db.funcionarios.find({ nome: { $regex: /Luis|Luiz/, $options: "i" } });
 
//exercicio 21:
use("estoque")
db.funcionarios.find({ cargo: "Desenvolvedor", departamento: "TI", salario: { $gt: 4500 } });

//exercicio 22:
use("estoque")
db.funcionarios.find({
    cargo:{$ne:"Desenvolvedor"}, 
    dataContratação:{$gte: new Date("2023-01-01"), $lt: new Date("2024-01-01")}
})

//exercicio 23:
use("estoque")
db.funcionarios.find({
    $and: [
        { projetos: { $in: ["Projeto A", "Projeto B"] } },
        { salario: { $lte: 5000 } }
      ]
})

//exercicio 24:
use("estoque")
db.funcionarios.find({
    departamento: { $ne: "TI" },
    projetos: { $nin: ["Projeto A"] }
})

//exercicio 25:
use("estoque")
db.funcionarios.find({
    $or: [
      { sexo: "Feminino" },
      { data_contratacao: { $lt: new Date("2023-01-01") } }
    ]
})

//exercicio 26:
db.funcionarios.find({
    $and: [
      { cargo: { $in: ["Desenvolvedor", "Analista"] } },
      { salario: { $gt: 4000 } },
      { data_contratacao: { $gte: new Date("2023-01-01") } }
    ]
})

use("estoque")
db.funcionarios.find()