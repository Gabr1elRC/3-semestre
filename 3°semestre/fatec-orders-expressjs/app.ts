import { Request, Response } from "express";
 
//importação da biblioteca express
const express = require('express');

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

const employees = [
    {
        id: 1,
        name: "Gabriel Correa",
        document: "40560741863",
        position: "Analista de TI",
        workingHours: 40,
        salary: 25000.00,
        zipCode: "18111-385"
    },
    {
        id: 2,
        name: "Miguel Ribeiro",
        document: "98765432109",
        position: "Gerente de Marketing",
        workingHours: 40,
        salary: 3500.00,
        zipCode: "21434-123"
    }
];
 
// Rota GET para listar todos os produtos com filtros
app.get("/product", (req: Request, res: Response) => {
    const { name, brand, supplier, stockId } = req.query;

    let filteredProducts = products;

    // Filtro por name (parcial e case-insensitive)
    if (name) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes((name as string).toLowerCase())
        );
    }

    // Filtro por brand (parcial e case-insensitive)
    if (brand) {
        filteredProducts = filteredProducts.filter(product =>
            product.brand.toLowerCase().includes((brand as string).toLowerCase())
        );
    }

    // Filtro por supplier (parcial e case-insensitive)
    if (supplier) {
        filteredProducts = filteredProducts.filter(product =>
            product.supplier.toLowerCase().includes((supplier as string).toLowerCase())
        );
    }

    // Filtro por stockId (igual, sem considerar o case)
    if (stockId) {
        filteredProducts = filteredProducts.filter(product =>
            product.stockId === parseInt(stockId as string)
        );
    }

    res.status(200).json(filteredProducts);
});
 
//cria um produto
app.post("/product", (req: Request, res: Response) => {
    const product = req.body;
    products.push(product);
 
    res.status(201).send();
});
 
app.delete("/product/:id", (req: Request, res: Response) => {
    const { id } = req.params;

    // Verifica se o produto com o id existe
    const index = products.findIndex(product => product.id === parseInt(id));

    if (index === -1) {
        return res.status(404).send({ error: "Produto não encontrado" });
    }

    // Condição para verificar se o produto não pode ser excluído
    // Exemplo: Se o produto com id 1 não puder ser excluído, podemos usar a seguinte condição:
    if (parseInt(id) === 1) {
        return res.status(400).send({ error: "Este produto não pode ser excluído!" });
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
 
// Rota GET para listar todos os clientes com filtros
app.get("/client", (req: Request, res: Response) => {
    const { name, document, phone } = req.query;

    let filteredClients = clients;

    // Filtro por name (parcial e case-insensitive)
    if (name) {
        filteredClients = filteredClients.filter(client =>
            client.name.toLowerCase().includes((name as string).toLowerCase())
        );
    }

    // Filtro por document (parcial e case-insensitive)
    if (document) {
        filteredClients = filteredClients.filter(client =>
            client.document.includes((document as string)) // Sem toLowerCase porque o documento é numérico
        );
    }

    // Filtro por phone (parcial e case-insensitive)
    if (phone) {
        filteredClients = filteredClients.filter(client =>
            client.phone.includes((phone as string)) // Também sem toLowerCase, pois é numérico
        );
    }

    res.status(200).json(filteredClients);
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

    // Verifica se o cliente com o id existe
    const index = clients.findIndex(client => client.id === parseInt(id));

    if (index === -1) {
        return res.status(404).send({ error: "Cliente não encontrado" });
    }

    // Condição para verificar se o cliente não pode ser excluído
    if (parseInt(id) === 1) {
        return res.status(400).send({ error: "Este cliente não pode ser excluído!" });
    }

    // Remover o cliente da lista
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

// Rota GET para listar todos os funcionários com filtros
app.get("/employee", (req: Request, res: Response) => {
    const { name, position, workingHours } = req.query;

    let filteredEmployees = employees;

    // Filtro por name (parcial e case-insensitive)
    if (name) {
        filteredEmployees = filteredEmployees.filter(employee =>
            employee.name.toLowerCase().includes((name as string).toLowerCase())
        );
    }

    // Filtro por position (parcial e case-insensitive)
    if (position) {
        filteredEmployees = filteredEmployees.filter(employee =>
            employee.position.toLowerCase().includes((position as string).toLowerCase())
        );
    }

    // Filtro por workingHours
    if (workingHours) {
        filteredEmployees = filteredEmployees.filter(employee =>
            employee.workingHours === parseInt(workingHours as string)
        );
    }

    res.status(200).json(filteredEmployees);
});

// Rota POST para criar um novo funcionário
app.post("/employee", (req: Request, res: Response) => {
    const employee = req.body;
    employees.push(employee);
    res.status(201).send();
});

//rota para excluir funcionario
app.delete("/employee/:id", (req: Request, res: Response) => {
    const { id } = req.params;

    // Verifica se o funcionário com o id existe
    const index = employees.findIndex(employee => employee.id === parseInt(id));

    if (index === -1) {
        return res.status(404).send({ error: "Funcionário não encontrado" });
    }

    // Condição para verificar se o funcionário não pode ser excluído
    if (parseInt(id) === 1) {
        return res.status(400).send({ error: "Este funcionário não pode ser excluído!" });
    }

    // Remover o funcionário da lista
    employees.splice(index, 1);

    res.status(200).send({ message: "Funcionário deletado com sucesso!" });
});

// Rota PUT para atualizar um funcionário por ID
app.put("/employee/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedEmployee = req.body;

    const index = employees.findIndex(employee => employee.id === parseInt(id));

    if (index === -1) {
        return res.status(404).send({ error: "Funcionário não encontrado" });
    }

    employees[index] = { ...employees[index], ...updatedEmployee };
    res.status(200).send({ message: "Funcionário atualizado com sucesso!" });
});
 
//inicia aplicação na porta 3000
app.listen(3000, () => {
    console.log("Servidor executando na Porta 3000");
});