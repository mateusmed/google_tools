
class InvestmentDao{

    constructor() {
        this.investmentTable =  database.getTable("investment")
    }


    async getInvestmentByPartnerId(partnerId) {

        let idPartnerIndex = this.investmentTable.columns.indexOf("id_partner");
        let valueIndex = this.investmentTable.columns.indexOf("value");

        let investmentList =  await genericDAO.getWhenColumnEqualValue(this.investmentTable.name,
                                                                       idPartnerIndex,
                                                                       partnerId);

        function getTotal(total, item) {
            return total + item[valueIndex];
        }

        return  await investmentList.reduce(getTotal, 0);
    }


    async update(item){
        Logger.log(`[investmentDao] investment to update ${item}`);

        return genericDAO.updateItem(this.investmentTable.name,
            item,
            this.investmentTable.columns.length);
    }

    async save(item){

        Logger.log(`[investmentDao] investment to update ${item}`);

        await genericDAO.createItem(this.investmentTable.name,
                                    item,
                                    this.investmentTable.columns.length);

    }
}

const investmentDAO = new InvestmentDao();