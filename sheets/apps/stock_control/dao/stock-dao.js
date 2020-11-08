
class StockDao{

    constructor() {
        this.stockTable = database.getTable("stock");
    }


    async getAll() {

        let stockList = await genericDAO.getAll(this.stockTable.name);
        let idProductIndex = this.stockTable.columns.indexOf("id_product");

        let productDTOList = [];

        for(let stock of stockList){

            let idProduct = stock[idProductIndex]
            let product = await productDao.getProductById(idProduct);

            //productDTOList.push(new StockDTO(product, company))
        }

        return productDTOList;
    }

    /*
    async getById(productId) {
        let idCompanyIndex = this.productTable.columns.indexOf("id_company");

        let product = await genericDAO.getById(this.productTable.name, productId);

        let idCompany = product[idCompanyIndex];

        let company = await companyDao.getCompanyById(idCompany);

        let productDTO = new StockDTO(product, company);

        Logger.log("[productDao - company] ", JSON.stringify(productDTO));

        return productDTO;
    }
    */

    async saveStock(productArrayValues){
        await genericDAO.createItem(this.stockTable.name,
                                    productArrayValues,
                                    this.stockTable.columns.length);
    }

}

const stockDAO = new StockDao();