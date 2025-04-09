import { Request, Response } from "express";
import { IproductListFilters } from "./Iproducts";
import productRoutes from "./src/routes/product.routes";
import clientRouter from "./src/routes/client.routes";
import { ClientRequest } from "http";

//importação da biblioteca express
const express = require('express');

//const { userController } = require(",/src/controller/user");

//criação da aplicação
const app = express();

//Configura aplicação para receber json no body das requisições
app.use(express.json());

app.use("/product", productRoutes);
app.use("/client", clientRouter);

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


    // ------------------------------------------------------

   

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