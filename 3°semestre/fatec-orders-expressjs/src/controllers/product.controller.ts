import { Iproduct, IproductListFilters } from "../../Iproducts";

const products = [
    {
        id: 1,
        name: "Feijao Carioca",
        brand: "Broto Legal",
        barCode: "99999999999999",
        supplier: "Rede de Distribuição Ltda",
        stockId: 98,
        Price: 8.79,
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
        Price: 29.99,
        weight: 5,
        measureUnit: "kg",
    }
]

export const listProducts = (productFilters: IproductListFilters): Iproduct[] => {
    const { 
        name: nameFilter, 
        brand: brandFilter, 
        supplier: supplierFilter, 
        stockId: stockFilter 
    } = productFilters;
    
        const foundProducts = products.filter(({ name, brand, supplier, stockId }) => {
            // Se não houver filtros, retorna todos os produtos
            if (!(nameFilter || brandFilter || supplierFilter || stockFilter)) return true;
    
            let found = false; // Começa como false e muda para true se algum critério for atendido
    
            if (nameFilter && name.toUpperCase().includes(nameFilter.toUpperCase())) 
                found = true;
            if (brandFilter && brand.toUpperCase().includes(brandFilter.toUpperCase())) 
                found = true;
            if (supplierFilter && supplier.toUpperCase().includes(supplierFilter.toUpperCase())) 
                found = true;
            if (stockFilter && stockId == stockFilter) 
                found = true;
    
            ;
        });
        return foundProducts;
        
}