class ProductService{

    async getAllCategoryProducts(){
        return await entityDao.getEntityByType("category");
    }

    async getProductStatus(){
        return await entityDao.getEntityByType("status");
    }

    async getAllProducts(){
        return await productDao.getAll();
    }

    async getProductById(id){
        return await productDao.getProductById(id);
    }


    async buildArray(data){
        return [data.id,
                data.name,
                data.description,
                data.categoryId]
    }

    async updateNewProduct(array){
        await productDao.updataProduct(array);
    }

    async createNewProduct(array){
        await productDao.saveProduct(array);
    }

    async saveOrUpdateNewProductForm(data){

        try{
            Logger.log("[productService] received data ", JSON.stringify(data));

            let productArrayValues = await this.buildArray(data);

            if(data.companyId === "Select"){
                return await renderMessageResponse("warning",
                                            `Selecione uma opção`);
            }

            if(data.id === "" || data.id === undefined){

                await this.createNewProduct(productArrayValues);
                return await renderMessageResponse("primary",
                    `Salvo com sucesso`);
            }

            await this.updateNewProduct(productArrayValues);

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