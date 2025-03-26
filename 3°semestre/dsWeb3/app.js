//importação da biblioteca express
const express = require('express');

// criação da aplicação 
const app = express();

//define metodo http get que responde no path
app.get("/", (req, res) =>{
    res.send("hello world"); // <= responde a requisição com "hello world"
});

//define metodo http no post
app.post("/", (req, res) =>{
    res.send("hello world again");
});

//inicia aplicação na porta 3000
app.listen(3000, ()=>{
    console.log("servidor executando na porta 3000");
});
