
class ProductDao{

    constructor() {
        this.productTable = database.getTable("product");
    }

    async getAllProducts() {

        let productList = await genericDAO.getAll(this.productTable.name);

        let productListReturn = []

        for(let product of productList){
            await productListReturn.push(new ProductTableDTO(product))
        }

        return productListReturn;
    }

    async getProductById(productId) {

        let tableName = this.productTable.name;
        let product = await genericDAO.getById(tableName, productId);

        //todo verificar se produto foi encontrado

        let investmentList = await investmentDAO.getInvestmentByProductId(productId);

        let productObj = new ProductDTO(product, investmentList);

        Logger.log("Return productObj: " + JSON.stringify(productObj));

        return productObj;
    }

    async saveOrUpdate(product){

        //todo ----> se vier em json a ordem dos dados pode vir alterados
        //todo se tu realmente quisesse que eles viessem em ordem vc mandava uma lista

        Logger.log("saveOrUpdateProduct: " + JSON.stringify(product));

        let productArrayValues = [product.id,
                                  product.name,
                                  product.qtd,
                                  product.ppuc,
                                  product.ppuv,
                                  product.description];


        if(product.id === undefined || product.id === ""){
            return genericDAO.createItem(this.productTable.name,
                              productArrayValues,
                              this.productTable.columns.length);
        }

        return genericDAO.updateItem(this.productTable.name,
                          productArrayValues,
                          this.productTable.columns.length);
    }

}


// todo tem q estar fora pois quem chama é o js da pagina, não tem acesso a classe
function saveOrUpdateProduct(data){

    productDAO.saveOrUpdate(data);
}

const productDAO = new ProductDao();
