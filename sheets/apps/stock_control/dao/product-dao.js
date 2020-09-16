
class ProductDao{

    constructor() {
        this.productTable = database.getTable("product")
        this.investmentDao = new InvestmentDao();
    }

    async getAllProducts() {
        return getAll(this.productTable["name"]);
    }

    async getProductById(productId) {

        let tableName = this.productTable["name"];
        let product = await getById(tableName, productId);

        //todo verificar se produto foi encontrado

        let investmentList = await this.investmentDao.getInvestmentByProductId(productId);

        let productObj = new ProductDTO(product, investmentList);

        Logger.log("Return productObj: " + JSON.stringify(productObj));

        return productObj;
    }

    saveOrUpdate(data){

        Logger.log("saveOrUpdateProduct: " + JSON.stringify(product));

        // let productArrayValues = getListValueFromJson(product);

        if(data[0] === undefined || data[0] === ""){
            return createItem("product",
                              product,
                              6);
        }

        return updateItem("product",
                          data,
                          6);
    }

}


// todo tem q estar fora pois quem chama é o js da pagina, não tem acesso a classe
function saveOrUpdateProduct(data){
    let productDao = new ProductDao();
    productDao.saveOrUpdate(data);
}