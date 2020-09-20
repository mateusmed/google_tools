

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

        Logger.log("find " + JSON.stringify(find));
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


    createItem(from, item, numColumns){

        Logger.log("======> create item");

        let ss = SpreadsheetApp.openByUrl(database.urlDatabase);
        let ws = ss.getSheetByName(from);

        let lastRow = ws.getLastRow();
        let id = lastRow + 1;
        item[0] = id;

        ws.getRange(id, 1, 1, numColumns).setValues([item]);

        return true;
    }




    updateItem(from, item, numColumns){

        Logger.log("item " + item);

        let ss = SpreadsheetApp.openByUrl(database.urlDatabase);
        let ws = ss.getSheetByName(from);

        let id = item[0];
        item.splice(0, 1);

        //row  - linha inicial,
        //column -  coluna inicial,
        //numRows -  numero de linhas a partir da "row" escolhida,
        //numColumns -  numero de colunas a partir da "column" escolhida,
        //ws.getRange(row, column, numRows, numColumns)
        numColumns = numColumns - 1;

        ws.getRange(id, 2, 1, numColumns).setValues([item]);

        return true;
    }
}

const genericDAO = new GenericDao();