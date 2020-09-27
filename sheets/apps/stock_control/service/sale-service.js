

class SaleService{

    async getAllSale(){

        let productList = await productDAO.getAll();

        let productListReturn = []

        for(let product of productList){
            await productListReturn.push(new ProductTableDTO(product))
        }

        return productListReturn;
    }

    async saveOrUpdateSaleForm(data){

        try{

            Logger.log("[saleService] received data ", JSON.stringify(data));

            let productDataBase =  await productDAO.getById(data.productId);
            let product = new ProductTableDTO(productDataBase);

            let newQuantity = product.quantity - data.qtdSale;

            if(newQuantity < 0){
                Logger.log("[saleService] quantidade indisponível ");
                return await renderMessageResponse("warning", "Quantidade indisponível");
            }

            product.quantity = newQuantity;

            Logger.log("[saleService] product ", JSON.stringify(product));

            let productArrayValues = [ product.id,
                                       product.name,
                                       product.quantity,
                                       product.purchaseUnitPrice,
                                       product.estimatedUnitSalePrice,
                                       product.description]

            await productDAO.saveOrUpdate(productArrayValues);

            let saleArrayValues = ["",
                                   getDateNow(),
                                   product.id,
                                   data.qtdSale,
                                   data.price];

            await saleDAO.saveOrUpdate(saleArrayValues)

            return await renderMessageResponse("primary", "sucesso ao salvar");

        }catch (error){
            return await renderMessageResponse("danger",
                                               `ocorreu um erro inesperado${JSON.stringify(error)}`);
        }
    }

}

async function saveOrUpdateSale(data){

    return await saleService.saveOrUpdateSaleForm(data);
}


const saleService = new SaleService();