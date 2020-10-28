

class PcLinksDao{

    constructor() {
        this.pcBuilded = database.getTable("pcLinks")
    }

    async getById(id) {

        let pcLinksList = await genericDAO.getById(this.pcBuilded.name, id);

        let linkList = []

        for (let pcLink of pcLinksList){
            await linkList.push(pcLink[2]);
        }

        Logger.log("partners: " + JSON.stringify(linkList));
        return linkList;
    }


}

const pcLinksDao = new PcLinksDao();