

class SaleDao{

    constructor() {
        this.saleTable = database.getTable("sale");
    }

    async getAll() {
        let tableName = this.saleTable.name;
        let idProductIndex = this.saleTable.columns.indexOf("id_product");

        let saleList = await genericDAO.getAll(tableName);

        let saleDTOList = [];

        for(let sale of saleList){

            let idProduct = sale[idProductIndex]
            let product = await productDAO.getById(idProduct)

            saleDTOList.push(new SaleDTO(sale, product))
        }

        return saleDTOList;
    }

    async save(saleArrayValues) {

        await genericDAO.createItem(this.saleTable.name,
                                     saleArrayValues,
                                     this.saleTable.columns.length);
    }

}


const saleDAO = new SaleDao();