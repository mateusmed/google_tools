

class EntityDao{

    constructor() {
        this.entityTable = database.getTable("entity")
    }

    async getAll() {

        let entityList = await genericDAO.getAll(this.entityTable.name);

        let entityDTOList = []

        for (let entity of entityList){
            await entityDTOList.push(new EntityDTO(entity));
        }

        return entityDTOList;
    }

    async getById(id) {
        let entity = await genericDAO.getById(this.entityTable.name, id);
        return new EntityDTO(entity);
    }

    async getEntityByType(type) {

        let typeIndex = this.entityTable.columns.indexOf("type");

        let entityList = await genericDAO.getWhenColumnEqualValue(this.entityTable.name,
                                                                  typeIndex,
                                                                  type);

        Logger.log(`======> entityList [${JSON.stringify(entityList)}]`);

        let entityDTOList = [];

        for (let entity of entityList){
            await entityDTOList.push(new EntityDTO(entity));
        }

        return entityDTOList;
    }

}

const entityDao = new EntityDao();