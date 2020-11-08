
class StockDao{

    constructor() {
        this.stockTable = database.getTable("stock");
    }


    async getAll() {

        let stockList = await genericDAO.getAll(this.stockTable.name);
        let idProductIndex = this.stockTable.columns.indexOf("id_product");
        let idStatusIndex = this.stockTable.columns.indexOf("id_status");

        let stockDTOList = [];

        for(let stock of stockList){

            let idProduct = stock[idProductIndex];
            let idStatus = stock[idStatusIndex];

            let product = await productDao.getProductById(idProduct);
            let status = await entityDao.getById(idStatus)

            stockDTOList.push(new StockDTO(stock, product, status))
        }

        return stockDTOList;
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