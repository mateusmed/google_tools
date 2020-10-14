
class ProductService {

    async getAllProducts(){
        let productList = await productDAO.getAll();

        let productListReturn = []

        for(let product of productList){

            let productDTO = new ProductTableDTO(product)

            if(productDTO.quantity !== 0){
                await productListReturn.push(productDTO);
            }
        }

        return productListReturn;
    }

    async getProductById(productId){

        Logger.log("[productService - getProductById]");

        let product = await productDAO.getById(productId)

        Logger.log("product "+ product);

        //todo verificar se produto foi encontrado

        let investmentList = await investmentDAO.getInvestmentByProductId(productId);

        let productDTO = new ProductDTO(product, investmentList);

        Logger.log("[productService] - Return productDTO: " + JSON.stringify(productDTO));

        return productDTO;
    }

    async invalidForm(data){

        let totalProductValue = (data.qtd * data.ppuc);

        let totalInvestment = data.investment.reduce(function (total, item) {
            return (total + item.value);
        }, 0);

        if(totalInvestment < totalProductValue){
            return true;
        }

        return false;
    }


    async saveOrUpdateProductForm(data){

        try{

            if(await this.invalidForm(data)){

                return await renderMessageResponse("warning",
                                            "Investimento não cobre com o valor do produto");
            }

            Logger.log("[productService] received data ", JSON.stringify(data));

            let productArrayValues = [data.id,
                                      data.name,
                                      data.qtd,
                                      data.ppuc,
                                      data.ppuv,
                                      data.description];

            let productId = await productDAO.saveOrUpdate(productArrayValues);

            let investmentFormList = data.investment;

            for(let item of investmentFormList){

                Logger.log("[productService] in loop ");

                let investment = [item.investment_id, item.partner_id, productId, item.value];

                Logger.log("[productService] investment to save or update "+ investment);
                await investmentDAO.saveOrUpdate(investment)
            }

            return await renderMessageResponse("primary", "sucesso ao salvar");

        }catch (error){

            Logger.log("[productService] received data ", JSON.stringify(data));

            return await renderMessageResponse("danger",
                `ocorreu um erro inesperado${JSON.stringify(error)}`);
        }
    }
}

//--------------------------- call from page

async function saveOrUpdateProduct(data){
    return await productService.saveOrUpdateProductForm(data);
}


const productService = new ProductService();
