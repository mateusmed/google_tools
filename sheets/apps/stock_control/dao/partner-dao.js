

class PartnerDao{
    constructor() {
        this.partnerTable = database.getTable("partner")
    }

    async getAllPartner() {
        return genericDAO.getAll(this.partnerTable.name);
    }

    async getPartnerById(id) {
        return genericDAO.getById(this.partnerTable, id);
    }

}

const partnerDao = new PartnerDao();