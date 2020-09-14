
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

        Logger.log("productId " + JSON.stringify(productId));
        Logger.log("this.investmentColumns.indexOf(\"id_product\") " + this.investmentColumns.indexOf("id_product"));

        let investmentList =  await getWhenColumnEqualValue(this.investmentTable,
                                                            this.getIndex("id_product"),
                                                            productId);

        let investmentDTOS = []

        investmentList.map( async (item) => {

            let partnerId = item[this.getIndex("id_partner")];
            let partnerObj = await this.partnerDao.getPartnerById(partnerId);

            Logger.log("partnerObj " + JSON.stringify(partnerObj));

            investmentDTOS.push(new InvestmentDTO(item, partnerObj));
        });

        Logger.log("investmentDTOS " + JSON.stringify(Promise.all(investmentDTOS)));

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
