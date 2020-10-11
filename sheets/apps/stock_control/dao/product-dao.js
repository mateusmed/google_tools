
class ProductDao{

    constructor() {
        this.productTable = database.getTable("product");
    }

    async getAll() {

        let tableName = this.productTable.name;
        return await genericDAO.getAll(tableName);
    }

    async getById(productId) {

        Logger.log("[productDao - getProductById]");

        let tableName = this.productTable.name;
        return await genericDAO.getById(tableName, productId);
    }

    async saveOrUpdate(productArrayValues){

        if(productArrayValues[0] === undefined || productArrayValues[0] === ""){
            return await genericDAO.createItem(this.productTable.name,
                                         productArrayValues,
                                         this.productTable.columns.length);
        }

        return await genericDAO.updateItem(this.productTable.name,
                                     productArrayValues,
                                     this.productTable.columns.length);
    }

}

const productDAO = new ProductDao();