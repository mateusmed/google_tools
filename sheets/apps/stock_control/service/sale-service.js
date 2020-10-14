

class SaleService{

    async getAllSaleTable(){

        let saleList = await saleDAO.getAll();

        let saleListReturn = []

        for(let sale of saleList){

            //todo melhorar isso aqui
            let productId = sale[2];
            let product = await productDAO.getById(productId);

            await saleListReturn.push(new SaleTableDTO(sale, product))
        }

        Logger.log("[saleService] saleListReturn ", JSON.stringify(typeof saleListReturn[0].dateSale));

        return saleListReturn;
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
                                   getDate(),
                                   product.id,
                                   data.qtdSale,
                                   data.price];

            //registra venda
            await saleDAO.save(saleArrayValues)

            let partnerCompany = await partnerDao.getPartnerCompany();
            let totalValueSale = (data.qtdSale * data.price);

            //valor atribuido para "empresa"
            await paymentDao.save(["",
                                                  partnerCompany.id,
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