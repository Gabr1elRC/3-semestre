import express from "express";
import { Request, Response } from "express";
import { IproductListFilters } from "../../Iproducts";
import { listProducts } from "../controllers/product.controller";


const router = express.Router();



// Rota GET para listar todos os produtos com filtros
router.get("/", (req: Request, res: Response) => {
    const productFilters = req.query as unknown as IproductListFilters;
    
    const product = listProducts(productFilters);

    res.status(200).json(product);
});

    //cria um produto
    router.post("/", (req: Request, res: Response) => {
        const product = req.body;
        product.push(product);

        res.status(201).send();
    });

    router.delete("/:id", (req: Request, res: Response) => {
        const { id } = req.params;

        // Verifica se o produto com o id existe
        const index = products.findIndex(product => product.id === parseInt(id));

        if (index === -1) {
            res.status(404).send({ error: "Produto não encontrado" });
            return;
        }

        // Condição para verificar se o produto não pode ser excluído
        // Exemplo: Se o produto com id 1 não puder ser excluído, podemos usar a seguinte condição:
        if (parseInt(id) === 1) {
             res.status(400).send({ error: "Este produto não pode ser excluído!" });
             return;
        }

        // Remover o produto do array
        products.splice(index, 1);

        // Retornar uma resposta de sucesso
        res.status(200).send({ message: "Produto deletado com sucesso!" });
    });

    // Rota PUT para atualizar um produto por ID
    router.put("/:id", (req: Request, res: Response) => {
        const { id } = req.params;
        const updatedProduct = req.body;

        // Encontrar o índice do produto a ser atualizado
        const index = products.findIndex(product => product.id === parseInt(id));

        if (index === -1) {
             res.status(404).send({ error: "Produto não encontrado" });
             return;
        }

        // Atualizar o produto no array
        products[index] = { ...products[index], ...updatedProduct };

        // Resposta de sucesso após atualização
        res.status(200).send({ message: "Produto atualizado com sucesso!" });
    });

export default router;