

class PcLinksDao{

    constructor() {
        this.pcBuilded = database.getTable("pcLinks")
    }

    async getById(id) {

        let idIndex = this.pcBuilded.columns.indexOf("id_pcBuilded");
        let linkIndex = this.pcBuilded.columns.indexOf("link");

        let pcLinks = await genericDAO.getWhenColumnEqualValue(this.pcBuilded.name, idIndex, id);

        return await pcLinks.map((pcLink) => {
                    return pcLink[linkIndex];
                })
    }


}

const pcLinksDao = new PcLinksDao();