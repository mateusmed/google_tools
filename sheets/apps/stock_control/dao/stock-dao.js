
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


    async getById(stockId) {

        let stock = await genericDAO.getById(this.stockTable.name, stockId);
        let idProductIndex = this.stockTable.columns.indexOf("id_product");
        let idStatusIndex = this.stockTable.columns.indexOf("id_status");

        let idProduct = stock[idProductIndex];
        let idStatus = stock[idStatusIndex];

        let product = await productDao.getProductById(idProduct);
        let status = await entityDao.getById(idStatus)

        return new StockDTO(stock, product, status);
    }


    async saveStock(productArrayValues){
        await genericDAO.createItem(this.stockTable.name,
                                    productArrayValues,
                                    this.stockTable.columns.length);
    }

}

const stockDAO = new StockDao();