
class InvestmentDao{

    constructor() {
        this.investmentTable =  database.getTable("investment")
    }

    async getAllInvestment() {

        let tableName = this.investmentTable.name;
        return genericDAO.getAll(tableName);
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

    async saveOrUpdate(item){

        if(item[0] === undefined ||  item[0] === "undefined" ||  item[0] === ""){

            Logger.log(`[investmentDao] investment to update ${item}`);

            return genericDAO.createItem(this.investmentTable.name,
                                         item,
                                         this.investmentTable.columns.length);
        }

        Logger.log(`[investmentDao] investment to update ${item}`);

        return genericDAO.updateItem(this.investmentTable.name,
                                     item,
                                     this.investmentTable.columns.length);
    }
}

const investmentDAO = new InvestmentDao();