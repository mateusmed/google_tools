

//todo REFATORAR
class GenericDao {

    async getAll(from) {

        let ss = SpreadsheetApp.openByUrl(database.urlDatabase)
        let ws = ss.getSheetByName(from)

        return ws.getDataRange().getValues();
    }

    async getWhenColumnEqualValue(from, columnId, value) {
        let ss = SpreadsheetApp.openByUrl(database.urlDatabase);
        let ws = ss.getSheetByName(from);

        let list =  ws.getDataRange().getValues();
        let find = list.filter((item) => {
            return (item[columnId] == value);
        })

        return find;
    }


    async getByIdList(from, idList) {
        let ss = SpreadsheetApp.openByUrl(database.urlDatabase);
        let ws = ss.getSheetByName(from);

        let list =  ws.getDataRange().getValues();
        let find = list.filter((item) => {
            return ( idList.includes(item[0]) );
        })

        return find;
    }


    //todo atenção está pegando pelo id mas esta salvando e criando pelo index
    async getById(from, id) {

        Logger.log(`======> getById from [${JSON.stringify(from)}] 
                                   id [${JSON.stringify(id)}]`);

        let ss = SpreadsheetApp.openByUrl(database.urlDatabase);
        let ws = ss.getSheetByName(from);

        let list =  ws.getDataRange().getValues();

        Logger.log(`======> getById list [${JSON.stringify(list)}]`);

        let find = list.filter((item) => {
            return (item[0] == id);
        })

        if(find[0] === undefined){
            Logger.log(`======> getById find[0] undefined, return emptyList`);
            return [];
        }

        Logger.log(`======> getById find[0] [${JSON.stringify(find[0])}]`);
        return find[0]; 
    }


    //row  - linha inicial,
    //column -  coluna inicial,
    //numRows -  numero de linhas a partir da "row" escolhida,
    //numColumns -  numero de colunas a partir da "column" escolhida,
    //ws.getRange(row, column, numRows, numColumns)
    async createItem(from, item, numColumns){

        Logger.log(`======> create from [${JSON.stringify(from)}] 
                                   item [${JSON.stringify(item)}] 
                                   numColumns [${numColumns}]`);

        let ss = SpreadsheetApp.openByUrl(database.urlDatabase);
        let ws = ss.getSheetByName(from);

        let lastRow = ws.getLastRow();
        let id = lastRow + 1;
        item[0] = id;

        ws.getRange(id, 1, 1, numColumns).setValues([item]);

        Logger.log(`======> rangeSaved`);

        return item;
    }

    //TODO esta atualizando pelo index, tem q atualizar pelo id do objeto
    async updateItem(from, item, numColumns){

        Logger.log(`======> update item from [${JSON.stringify(from)}] item [${JSON.stringify(item)}] numColumns [${numColumns}]`);

        let ss = SpreadsheetApp.openByUrl(database.urlDatabase);
        let ws = ss.getSheetByName(from);

        let id = item[0];
        item.splice(0, 1);

        numColumns = numColumns - 1;

        ws.getRange(id, 2, 1, numColumns).setValues([item]);

        Logger.log(`======> rangeSaved`);
    }
}

const genericDAO = new GenericDao();