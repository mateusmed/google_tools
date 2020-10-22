

class ProductDao{

    constructor() {
        this.productTable = database.getTable("product")
    }

    async getAll() {

        let categoryIndex = this.productTable.columns.indexOf("id_category");

        let productList = await genericDAO.getAll(this.productTable.name);

        Logger.log("genericDAO.getAll: " + JSON.stringify(productList));

        let productDTOList = [];

        for (let product of productList){

            let category = await entityDao.getById(product[categoryIndex]);

            Logger.log("entityDao.getById: " + JSON.stringify(category));

            productDTOList.push(new ProductDTO(product, category));
        }

        Logger.log("product: " + JSON.stringify(productDTOList));
        return productDTOList;
    }

    async getProductById(id) {

        let categoryIndex = this.productTable.columns.indexOf("id_category");

        let product = await genericDAO.getById(this.productTable.name, id);
        let category = await entityDao.getById(product[categoryIndex]);

        return new ProductDTO(product, category)
    }

    async saveProduct(productArrayValues){
        await genericDAO.createItem(this.productTable.name,
                                    productArrayValues,
                                    this.productTable.columns.length);
    }


    async updataProduct(productArrayValues){
        await genericDAO.updateItem(this.productTable.name,
                                    productArrayValues,
                                    this.productTable.columns.length);
    }

}

const productDao = new ProductDao();