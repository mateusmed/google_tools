
class ProductDao{

    constructor() {
        this.productTable = database.getTable("product")
        this.investmentDao = new InvestmentDao();
    }

    async getAllProducts() {
        return getAll(this.productTable["name"]);
    }

    async getProductById(productId) {

        Logger.log("getProductById" + JSON.stringify(productId));

        let tableName = this.productTable["name"];
        let product = await getById(tableName, productId);

        //todo verificar se produto foi encontrado

        let investmentList = await this.investmentDao.getInvestmentByProductId(productId);

        let productObj = new ProductDTO(product, investmentList);

        Logger.log("Return productObj: " + JSON.stringify(productObj));

        return productObj;
    }

    saveOrUpdateProduct(product){

        let productArrayValues = getListValueFromJson(product);

        Logger.log("productArrayValues: " + JSON.stringify(productArrayValues));

        if(product.id === undefined || product.id === ""){
            return createItem(this.productTable.name,
                              productArrayValues,
                              this.productTable.columns.length);
        }

        return updateItem(this.productTable,
                          productArrayValues,
                          this.productTable.columns.length);
    }

}