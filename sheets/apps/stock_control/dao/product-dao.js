
class ProductDao{

    constructor() {
        this.productTable = "product";
        this.productColumns =  ["id",
            "name",
            "quantity",
            "purchase_unit_price",
            "estimated_unit_sale_price" ,
            "description"];
        this.investmentDao = new InvestmentDao();
    }


    async getAllProducts() {
        return getAll(this.productTable);
    }

    async getProductById(id) {

        Logger.log("getProductById" + JSON.stringify(id));

        let product = await getById(this.productTable, id);
        let investmentList = await this.investmentDao.getInvestmentByProductId(product[0]);

        Logger.log("investmentList" + JSON.stringify(investmentList));


        return product;
    }

    saveOrUpdateProduct(item){

        if(item[0] === undefined || item[0] === ""){
            return createItem(this.productTable, item, this.productColumns.length);
        }

        return updateItem(this.productTable, item, this.productColumns.length);
    }

}