

class SaleService{

    async getAllSales(){
        return await saleDAO.getAll();
    }

    async saveOrUpdateSaleForm(data){

        try{

            Logger.log("[saleService] received data ", JSON.stringify(data));

            let stock = stockService.getStockById(data.id)


            Logger.log("[saleService] productDTO ", JSON.stringify(productDTO));

            let newQuantity = stock.quantity - data.qtdSale;

            if(newQuantity < 0){
                Logger.log("[saleService] quantidade indisponível ");
                return await renderMessageResponse("warning", "Quantidade indisponível");
            }

            stock.quantity = newQuantity;

            Logger.log("[saleService] stock ", JSON.stringify(productDTO));

            let productArrayValues = [ productDTO.id,
                                       productDTO.name,
                                       productDTO.quantity,
                                       productDTO.purchaseUnitPrice,
                                       productDTO.estimatedUnitSalePrice,
                                       productDTO.description,
                                       productDTO.company.id];

            Logger.log("[saleService] productArrayValues ", JSON.stringify(productArrayValues));

            await productDAO.saveOrUpdate(productArrayValues);

            let saleArrayValues = ["",
                                   getDate(),
                                   productDTO.id,
                                   data.qtdSale,
                                   data.price];

            //registra venda
            await saleDAO.save(saleArrayValues)

            let totalValueSale = (data.qtdSale * data.price);

            //valor atribuido para "empresa"
            await financeDao.save(["",
                                                 productDTO.company.id,
                                                 totalValueSale,
                                                 getDate(undefined)]);

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