
class InvestmentDao{

    constructor() {
        this.investmentTable =  database.getTable("investment")
    }

    async getAllInvestment() {
        return genericDAO.getAll(this.investmentTable.name);
    }

    async getInvestmentByProductId(productId) {

        let idProductIndex = this.investmentTable.columns.indexOf("id_product");
        let idPartnerIndex = this.investmentTable.columns.indexOf("id_partner");

        let investmentList =  await genericDAO.getWhenColumnEqualValue(this.investmentTable.name,
                                                                        idProductIndex,
                                                                        productId);
        let investmentDTOS = []

        const promises = investmentList.map( async (item) => {

            let partnerId = item[idPartnerIndex];
            let partnerObj = await partnerDao.getPartnerById(partnerId);
            investmentDTOS.push(new InvestmentDTO(item, partnerObj));
        });

        await Promise.all(promises);

        return investmentDTOS;
    }

    saveOrUpdateInvestment(item){

        if(item[0] === undefined || item[0] === ""){
            return genericDAO.createItem(this.investmentTable,
                                         item,
                                         this.investmentTable.columns.length);
        }

        return genericDAO.updateItem(this.investmentTable,
                                     item,
                                     this.investmentTable.columns.length);
    }
}

const investmentDAO = new InvestmentDao();