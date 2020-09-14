

class PartnerDao{
    constructor() {
        this.partnerTable = "partner";
        this.partnerColumns = ["id", "name"];
    }

    async getAllPartner() {
        return getAll(this.partnerTable);
    }

    async getPartnerById(id) {
        return getById(this.partnerTable, id);
    }

}
