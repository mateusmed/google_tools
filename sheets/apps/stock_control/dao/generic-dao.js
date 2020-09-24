

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
        let ss = SpreadsheetApp.openByUrl(database.urlDatabase);
        let ws = ss.getSheetByName(from);

        let list =  ws.getDataRange().getValues();

        //todo pensar em pegar direto pelo index, vai ficar mais rapido;

        let find = list.filter((item) => {
            return (item[0] == id);
        })

        if(find[0] === undefined){
            return [];
        }
        return find[0]; 
    }


    //row  - linha inicial,
    //column -  coluna inicial,
    //numRows -  numero de linhas a partir da "row" escolhida,
    //numColumns -  numero de colunas a partir da "column" escolhida,
    //ws.getRange(row, column, numRows, numColumns)
    async createItem(from, item, numColumns){

        Logger.log(`======> create item from [${JSON.stringify(from)}] item [${JSON.stringify(item)}] numColumns [${numColumns}]`);

        let ss = SpreadsheetApp.openByUrl(database.urlDatabase);
        let ws = ss.getSheetByName(from);

        let lastRow = ws.getLastRow();
        let id = lastRow + 1;
        item[0] = id;

        ws.getRange(id, 1, 1, numColumns).setValues([item]);

        Logger.log(`======> rangeSaved`);
    }

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