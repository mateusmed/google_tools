
class InvestmentDao{

    constructor() {
        this.investmentTable =  database.getTable("investment")
        this.partnerDao = new PartnerDao();
    }

    async getAllInvestment() {
        return getAll(this.investmentTable);
    }

    async getInvestmentByProductId(productId) {

        let idProductIndex = this.investmentTable.getIndex("id_product");
        let idPartnerIndex = this.investmentTable.getIndex("id_partner");

        let investmentList =  await getWhenColumnEqualValue(this.investmentTable["name"],
                                                            idProductIndex,
                                                            productId);
        let investmentDTOS = []

        const promises = investmentList.map( async (item) => {

            let partnerId = item[idPartnerIndex];
            let partnerObj = await this.partnerDao.getPartnerById(partnerId);
            investmentDTOS.push(new InvestmentDTO(item, partnerObj));
        });

        await Promise.all(promises);

        return investmentDTOS;
    }

    saveOrUpdateInvestment(item){

        if(item[0] === undefined || item[0] === ""){
            return createItem(this.investmentTable,
                              item,
                              this.investmentTable.columns.length);
        }

        return updateItem(this.investmentTable,
                          item,
                          this.investmentTable.columns.length);
    }
}
