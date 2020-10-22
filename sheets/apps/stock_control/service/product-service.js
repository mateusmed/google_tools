class ProductService{

    async getAllCategoryProducts(){
        return await entityDao.getEntityByType("category");
    }

    async getAllProducts(){
        return await productDao.getAll();
    }


    async createNewProduct(data){

        let productArrayValues = [data.id,
                                  data.name,
                                  data.description,
                                  data.categoryId]

        await productDao.saveProduct(productArrayValues);
    }

    async saveOrUpdateNewProductForm(data){

        try{
            Logger.log("[productService] received data ", JSON.stringify(data));

            if(data.companyId === "Select"){
                return await renderMessageResponse("warning",
                                            `Selecione uma opção`);
            }

            await this.createNewProduct(data);

            return await renderMessageResponse("primary",
                                         `Salvo com sucesso`);

        }catch (error){

            Logger.log("[productService] received data ", JSON.stringify(data));

            return await renderMessageResponse("danger",
                `ocorreu um erro inesperado ${error}`);
        }
    }

}


async function saveOrUpdateProduct(data){
    return await productService.saveOrUpdateNewProductForm(data);
}


const productService = new ProductService();