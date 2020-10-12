
class PaymentDao {

    constructor() {
        this.paymentTable = database.getTable("payment")
    }

    async getPaymentsOfPartner(partnerId){

        let idPartnerIndex = this.paymentTable.columns.indexOf("id_partner");
        let valueIndex = this.paymentTable.columns.indexOf("value");

        let investmentList =  await genericDAO.getWhenColumnEqualValue(this.paymentTable.name,
                                                                       idPartnerIndex,
                                                                       partnerId);

        function getTotal(total, item) {
            return total + item[valueIndex];
        }

        return  await investmentList.reduce(getTotal, 0);
    }


    async save(paymentArrayValues){

        return await genericDAO.createItem(this.paymentTable.name,
                                           paymentArrayValues,
                                           this.paymentTable.columns.length);

    }
}

const paymentDao = new PaymentDao();