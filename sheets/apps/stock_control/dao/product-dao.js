
class ProductDao{

    constructor() {
        this.productTable = database.getTable("product")
        this.investmentDao = new InvestmentDao();
    }

    async getAllProducts() {
        return getAll(this.productTable["name"]);
    }

    async getProductById(id) {

        Logger.log("getProductById" + JSON.stringify(id));

        let product = await getById(this.productTable["name"], id);

        let idIndex = this.productTable.getIndex("id");

        let investmentList = await this.investmentDao.getInvestmentByProductId(product[idIndex]);

        let productObj = new ProductDTO(product, investmentList);

        Logger.log("productObj" + JSON.stringify(productObj));

        return product;
    }

    saveOrUpdateProduct(item){

        if(item[0] === undefined || item[0] === ""){
            return createItem(this.productTable, item, this.productTable.columns.length);
        }

        return updateItem(this.productTable, item, this.productTable.columns.length);
    }

}