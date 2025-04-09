import express, { Request, Response } from 'express';


import { IproductListFilters } from "../../Iproducts";

const router = express.Router();

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

router.get("/client", (req: Request, res: Response) => {
    const { name, document, phone } = req.query;
  
    let filteredClients = clients;
  
    if (name || document || phone) {
      if (name) {
        filteredClients = filteredClients.filter(client =>
          client.name.toLowerCase().includes((name as string).toLowerCase())
        );
      }
  
      if (document) {
        filteredClients = filteredClients.filter(client =>
          client.document.includes(document as string)
        );
      }
  
      if (phone) {
        filteredClients = filteredClients.filter(client =>
          client.phone.includes(phone as string)
        );
      }
    }
  
    res.status(200).json(filteredClients);
  });

    // Rota POST para criar um novo cliente
    router.post("/client", (req: Request, res: Response) => {
        const client = req.body;
        clients.push(client);
        res.status(201).send();
    });

    // Rota DELETE para excluir um cliente por ID
    router.delete("/client/:id", (req: Request, res: Response) => {
        const { id } = req.params;

        // Verifica se o cliente com o id existe
        const index = clients.findIndex(client => client.id === parseInt(id));

        if (index === -1) {
             res.status(404).send({ error: "Cliente não encontrado" })
             return;
        }

        // Condição para verificar se o cliente não pode ser excluído
        if (parseInt(id) === 1) {
             res.status(400).send({ error: "Este cliente não pode ser excluído!" })
             return;
        }

        // Remover o cliente da lista
        clients.splice(index, 1);

        res.status(200).send({ message: "Cliente deletado com sucesso!" });
    });

    // Rota PUT para atualizar um cliente por ID
    router.put("/client/:id", (req: Request, res: Response) => {
        const { id } = req.params;
        const updatedClient = req.body;

        const index = clients.findIndex(client => client.id === parseInt(id));

        if (index === -1) {
             res.status(404).send({ error: "Cliente não encontrado" })
             return;
        }

        clients[index] = { ...clients[index], ...updatedClient };
        res.status(200).send({ message: "Cliente atualizado com sucesso!" });
    });

    export default router;