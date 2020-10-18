
class FinanceDao {

    constructor() {
        this.financeTable = database.getTable("finance")
    }

    async getFinanceOfUser(userId){

        let idUserIndex = this.financeTable.columns.indexOf("id_user");
        let valueIndex = this.financeTable.columns.indexOf("value");

        let financeList =  await genericDAO.getWhenColumnEqualValue(this.financeTable.name,
                                                                    idUserIndex,
                                                                    userId);

        function getTotal(total, item) {
            return total + item[valueIndex];
        }

        return financeList.reduce(getTotal, 0);
    }


    async save(financeArrayValues){

         await genericDAO.createItem(this.financeTable.name,
                                     financeArrayValues,
                                     this.financeTable.columns.length);

    }
}

const financeDao = new FinanceDao();