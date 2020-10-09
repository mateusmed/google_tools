
class StatistcService {

    constructor() {}

    async getStatisticOfPartners(){

        let partners = await partnerDao.getAllPartner();

        let list = [];

        for(let item of partners){

            let investment_value = await investmentDAO.getInvestmentByPartnerId(item.id);
            let payment_value =await paymentDao.getPaymentsOfPartner(item.id);

            list.push({
                "name": item.name,
                "investmentValue": investment_value,
                "paymentValue": payment_value
            })
        }

        Logger.log("list => ", JSON.stringify(list));

        return list;
    }
}


//--------------------------- call from page

async function saveOrUpdateProduct(data){
}


const statisticService = new StatistcService();
