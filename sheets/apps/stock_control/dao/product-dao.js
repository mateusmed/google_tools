
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

    async saveOrUpdate(product){

        //todo ----> se vier em json a ordem dos dados pode vir alterados
        //todo se tu realmente quisesse que eles viessem em ordem vc mandava uma lista


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

const productDAO = new ProductDao();