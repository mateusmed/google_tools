

class PartnerDao{
    constructor() {
        this.partnerTable = database.getTable("partner")
    }

    async getAllPartner() {

        let partnerList = await genericDAO.getAll(this.partnerTable.name);

        let partnersObjList = []

        for (let partner of partnerList){
            await partnersObjList.push(new PartnerDTO(partner));
        }

        Logger.log("partners: " + JSON.stringify(partnersObjList));
        return partnersObjList;
    }

    async getPartnerById(id) {
        return genericDAO.getById(this.partnerTable.name, id);
    }

}

const partnerDao = new PartnerDao();