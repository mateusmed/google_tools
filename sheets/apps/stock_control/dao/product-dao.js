
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

    async saveOrUpdate(data){

        Logger.log("saveOrUpdateProduct: " + JSON.stringify(product));

        let productArrayValues = [data.id,
                                  data.name,
                                  data.qtd,
                                  data.ppuc,
                                  data.ppuv,
                                  data.description];


        //todo não consigo fazer o código esperar
        // let productArrayValues = await getListValueFromJson(data);

        if(data.id === undefined || data.id === ""){
            return createItem(this.productTable.name,
                              productArrayValues,
                              this.productTable.columns.length);
        }

        return updateItem(this.productTable.name,
                          productArrayValues,
                          this.productTable.columns.length);
    }

}


// todo tem q estar fora pois quem chama é o js da pagina, não tem acesso a classe
function saveOrUpdateProduct(data){

    //todo injetar todas as instancias ao mesmo tempo
    let productDao = new ProductDao();
    productDao.saveOrUpdate(data);
}