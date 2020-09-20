

class PartnerDao{
    constructor() {
        this.partnerTable = database.getTable("partner")
    }

    async getAllPartner() {

        Logger.log("partnerTable name " + JSON.stringify(this.partnerTable.name));

        let partnerList = await genericDAO.getAll(this.partnerTable.name);

        Logger.log("partner List all partner " + JSON.stringify(partnerList));

        let partnersObjList = []

        for (let partner of partnerList){

            Logger.log("partner on for --> " + JSON.stringify(partner));
            await partnersObjList.push(new PartnerDTO(partner));
        }


        Logger.log("partnersObjList " + JSON.stringify(partnersObjList));
        return partnersObjList;
    }

    async getPartnerById(id) {
        return genericDAO.getById(this.partnerTable.name, id);
    }

}

const partnerDao = new PartnerDao();