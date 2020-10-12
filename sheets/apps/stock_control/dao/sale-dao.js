

class SaleDao{

    constructor() {
        this.saleTable = database.getTable("sale");
    }

    async getAll() {
        let tableName = this.saleTable.name;
        return await genericDAO.getAll(tableName);
    }

    async save(saleArrayValues) {

        return genericDAO.createItem(this.saleTable.name,
                                     saleArrayValues,
                                     this.saleTable.columns.length);
    }

}


const saleDAO = new SaleDao();