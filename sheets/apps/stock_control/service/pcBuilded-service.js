
class PcBuildedService {


    async allPcBuilded(){

        let pcBuildedList = await entityDao.getEntityByType("pcBuilded");

        let itens = [];

        for(let pc of pcBuildedList){

            let links = await pcLinksDao.getById(pc.id);
            links.map( async (link) => {
                itens.push(await rocketRaccoonService.getItems(link));
            })
        }

        Logger.log("[pcBuilded] itens ->", JSON.stringify(itens));

        return pcBuildedList;
    }


}

const pcBuildedService = new PcBuildedService();

