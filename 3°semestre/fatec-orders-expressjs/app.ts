import { Request, Response } from "express";
 
//importação da biblioteca express
import express from "express"

//const { userController } = require(",/src/controller/user");
 
//criação da aplicação
const app = express();
 
//Configura aplicação para receber json no body das requisições
app.use(express.json());
 
const products = [
    {
    id: 1,
    name: "Feijao Carioca",
    brand: "Broto Legal",
    barCode: "99999999999999",
    supplier: "Rede de Distribuição Ltda",
    stockId: 98,
    price: 8.79,
    weight: 1,
    measureUnit: "kg",
    },
    {
    id: 2,
    name: "Arroz",
    brand: "Tio João",
    barCode: "99999999999998",
    supplier: "Rede de Distribuição Ltda",
    stockId: 65,
    price: 29.99,
    weight: 5,
    measureUnit: "kg",
    }
]
 
const clients = [
    {
        id: 1,
        name: "João Silva",
        document: "12345678900",
        zipcode: "12345-678",
        phone: "(11) 98765-4321",
        email: "joao.silva@example.com"
    },
    {
        id: 2,
        name: "Maria Oliveira",
        document: "98765432100",
        zipcode: "87654-321",
        phone: "(21) 99876-5432",
        email: "maria.oliveira@example.com"
    }
];
 
//define método HTTP Get que responde no path /product/:id
app.get("/product/:id", (req: Request, res: Response) => {
    console.log(req.params.id);
 
    const product = products.find((product) => {
        return product.id == Number(req.params.id)
    })
 
    if (!product) {
        res.status(404).send();
        return;
    }
 
    //responde requisição com o produto encontrado
    res.status(200).json(product);
});
 
//define método HTTP Get que responde no path /product
app.get("/product", (req: Request, res: Response) => {
    console.log(req.query);
    res.status(200).json(products);
});
 
//cria um produto
app.post("/product", (req: Request, res: Response) => {
    const product = req.body;
    products.push(product);
 
    res.status(201).send();
});
 
app.delete("/product/:id", (req: Request, res: Response) => {
    const { id } = req.params;
 
    const index = products.findIndex(product => product.id === parseInt(id));
 
    if (index === -1) {
        // Caso não encontre o produto
        return res.status(404).send({ error: "Produto não encontrado" });
    }
 
    // Remover o produto do array
    products.splice(index, 1);
 
    // Retornar uma resposta de sucesso
    res.status(200).send({ message: "Produto deletado com sucesso!" });
});
 
// Rota PUT para atualizar um produto por ID
app.put("/product/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedProduct = req.body;
 
    // Encontrar o índice do produto a ser atualizado
    const index = products.findIndex(product => product.id === parseInt(id));
 
    if (index === -1) {
        return res.status(404).send({ error: "Produto não encontrado" });
    }
 
    // Atualizar o produto no array
    products[index] = { ...products[index], ...updatedProduct };
 
    // Resposta de sucesso após atualização
    res.status(200).send({ message: "Produto atualizado com sucesso!" });
});
 
// ------------------------------------------------------
 
// Rota GET para buscar um cliente por ID
app.get("/client/:id", (req: Request, res: Response) => {
    const client = clients.find(client => client.id === Number(req.params.id));
 
    if (!client) {
        return res.status(404).send();
    }
 
    res.status(200).json(client);
});
 
// Rota GET para listar todos os clientes
app.get("/client", (req: Request, res: Response) => {
    res.status(200).json(clients);
});
 
// Rota POST para criar um novo cliente
app.post("/client", (req: Request, res: Response) => {
    const client = req.body;
    clients.push(client);
    res.status(201).send();
});
 
// Rota DELETE para excluir um cliente por ID
app.delete("/client/:id", (req: Request, res: Response) => {
    const { id } = req.params;
 
    const index = clients.findIndex(client => client.id === parseInt(id));
 
    if (index === -1) {
        return res.status(404).send({ error: "Cliente não encontrado" });
    }
 
    clients.splice(index, 1);
    res.status(200).send({ message: "Cliente deletado com sucesso!" });
});
 
// Rota PUT para atualizar um cliente por ID
app.put("/client/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedClient = req.body;
 
    const index = clients.findIndex(client => client.id === parseInt(id));
 
    if (index === -1) {
        return res.status(404).send({ error: "Cliente não encontrado" });
    }
 
    clients[index] = { ...clients[index], ...updatedClient };
    res.status(200).send({ message: "Cliente atualizado com sucesso!" });
});
 
//inicia aplicação na porta 3000
app.listen(3000, () => {
    console.log("Servidor executando na Porta 3000");
});