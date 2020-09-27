

class SaleDao{

    constructor() {
        this.saleTable = database.getTable("sale");
    }

    async getAll() {
        let tableName = this.saleTable.name;
        return await genericDAO.getAll(tableName);
    }

    async saveOrUpdate(saleArrayValues) {

        // if(product.id === undefined || product.id === ""){
        //     return genericDAO.createItem(this.saleTable.name,
        //         saleArrayValues,
        //         this.saleTable.columns.length);
        // }

        return genericDAO.createItem(this.saleTable.name,
                                     saleArrayValues,
                                     this.saleTable.columns.length);
    }

}


const saleDAO = new SaleDao();