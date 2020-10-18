
class StatistcService {

    constructor() {}

    async getStatisticOfPartners(){

        let partners = await partnerDao.getAllPartner();

        let list = [];

        for(let item of partners){

            let investment_value = await investmentDAO.getInvestmentByPartnerId(item.id);
            let finance_value = await financeDao.getFinanceOfUser(item.id);

            list.push({
                "id": item.id,
                "name": item.name,
                "investmentValue": investment_value,
                "paymentValue": finance_value
            })
        }

        Logger.log("list => ", JSON.stringify(list));

        return list;
    }
}


//--------------------------- call from page

async function saveOrUpdateStatisct(data){
}


const statisticService = new StatistcService();
