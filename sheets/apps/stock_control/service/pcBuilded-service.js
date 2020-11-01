
class PcBuildedService {


    async getAllPcBuilded(){

        let pcBuildedList = await entityDao.getEntityByType("pcBuilded");

        return pcBuildedList.map((item) => {
            delete item["type"];
            return item;
        })
    }

    async getCostValue(itens){

        let totalCost =  itens.reduce( (total, item) => {
            return Number(total) + Number(item);
        }, 0);

        let result = (totalCost / itens.length);

        Logger.log(`result -> ${result} 
                        totalCost -> ${totalCost}  
                        itens.length -> ${itens.length} `);
        return result;
    }

    async getPcBuildedById(id){

        let pc = await entityDao.getById(id);
        let links = await pcLinksDao.getById(id);

        let linksObj = [];
        let totalCost = 0;

        for(let link of links){

            let allPricesByLink = await rocketRaccoonService.getItems(link);
            let costValue = await this.getCostValue(allPricesByLink);

            totalCost = totalCost + costValue;

            await linksObj.push({
                "link": link,
                "cost": costValue
            })
        }

        Logger.log(`total cost -> ${totalCost}`);

        return new PcBuildedDTO(pc, linksObj, totalCost);
    }

}

const pcBuildedService = new PcBuildedService();

