
class PcBuildedService {


    async getAllPcBuilded(){

        let pcBuildedList = await entityDao.getEntityByType("pcBuilded");

        return pcBuildedList.map((item) => {
            delete item["type"];
            return item;
        })
    }

    async getPcBuildedById(id){

        let entity = await entityDao.getById(id);
        Logger.log("[pcBuilded] entity ->", JSON.stringify(entity));

        let links = await pcLinksDao.getById(id);
        Logger.log("[pcBuilded] links ->", JSON.stringify(links));

        let pcBuildedDTOList = [];

        let itens = [];

        for(let link of links){
            Logger.log("[pcBuilded] link ->", JSON.stringify(link));
            itens.push(await rocketRaccoonService.getItems(link));
        }

        Logger.log("[pcBuilded] itens ->", JSON.stringify(itens));

        return itens;
    }


}

const pcBuildedService = new PcBuildedService();

