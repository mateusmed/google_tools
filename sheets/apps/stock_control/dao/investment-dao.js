
class InvestmentDao{

    constructor() {
        this.investmentTable = "investment";
        this.investmentColumns = ["id",
                                  "id_partner",
                                  "id_product",
                                  "value"];

        this.partnerDao = new PartnerDao();
    }

    getIndex(column){
        return this.investmentColumns.indexOf(column);
    }

    async getAllInvestment() {
        return getAll(this.investmentTable);
    }

    async getInvestmentByProductId(productId) {

        let investmentList =  await getWhenColumnEqualValue(this.investmentTable,
                                                            this.getIndex("id_product"),
                                                            productId);
        let investmentDTOS = []

        const promises = investmentList.map( async (item) => {

            let partnerId = item[this.getIndex("id_partner")];
            let partnerObj = await this.partnerDao.getPartnerById(partnerId);
            investmentDTOS.push(new InvestmentDTO(item, partnerObj));
        });

        await Promise.all(promises);

        Logger.log("investmentDTOS " + JSON.stringify(investmentDTOS));

        return investmentDTOS;
    }

    saveOrUpdateInvestment(item){

        if(item[0] === undefined || item[0] === ""){
            return createItem(this.investmentTable,
                              item,
                              this.investmentColumns.length);
        }

        return updateItem(this.investmentTable,
                          item,
                          this.investmentColumns.length);
    }
}
