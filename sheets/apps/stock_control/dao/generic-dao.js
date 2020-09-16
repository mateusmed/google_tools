
class Database {

    constructor() {

        this.tables = {
            "product": ["id",
                        "name",
                        "quantity",
                        "purchase_unit_price",
                        "estimated_unit_sale_price",
                        "description"],

            "partner": ["id",
                        "name"],

            "investment": ["id",
                           "id_partner",
                           "id_product",
                           "value"]
        }
    }

    getTable(name) {

        let columns = this.tables[name];

        if (columns !== undefined) {
            return {
                "name": name,
                "columns": columns
            }
        }
        //todo throw exception
    }

}


const urlDatabase = "https://docs.google.com/spreadsheets/d/1i2NOiagih_MhBoxClr59Lmecux7HatknkZmTFb22YU8/edit#gid=0"
const database = new Database();





async function getAll(from) {

  let ss = SpreadsheetApp.openByUrl(urlDatabase)
  let ws = ss.getSheetByName(from)

  return ws.getDataRange().getValues();
}


async function getWhenColumnEqualValue(from, columnId, value) {
  let ss = SpreadsheetApp.openByUrl(urlDatabase);
  let ws = ss.getSheetByName(from);

  let list =  ws.getDataRange().getValues();
  let find = list.filter((item) => {
    Logger.log("item " + JSON.stringify(item));
    Logger.log("item[columnId] " + JSON.stringify(item[columnId]));
    Logger.log("item[columnId] == value " + JSON.stringify(item[columnId] == value));

    return (item[columnId] == value);
  })

  Logger.log("find " + JSON.stringify(find));
  return find;
}


async function getByIdList(from, idList) {
  let ss = SpreadsheetApp.openByUrl(urlDatabase);
  let ws = ss.getSheetByName(from);

  let list =  ws.getDataRange().getValues();
  let find = list.filter((item) => {
    return ( idList.includes(item[0]) );
  })

  return find;
}



async function getById(from, id) {
  let ss = SpreadsheetApp.openByUrl(urlDatabase);
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


function createItem(from, item, numColumns){

  let ss = SpreadsheetApp.openByUrl(urlDatabase);
  let ws = ss.getSheetByName(from);

  let lastRow = ws.getLastRow();
  let id = lastRow + 1;
  item[0] = id;

  ws.getRange(id, 1, 1, numColumns).setValues([item]);

  return true;
}




function updateItem(from, item, numColumns){

  Logger.log("item " + item);

  let ss = SpreadsheetApp.openByUrl(urlDatabase);
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



// function getOptions(){
//   var ss = SpreadsheetApp.openByUrl(urlDatabase)
//   var ws = ss.getSheetByName("options")
//
//   var list = ws.getRange(1,
//                          1,
//                          ws.getRange("A1").getDataRegion().getLastRow(),
//                          1).getValues();
//
//   return list;
// }
//
//
//
// function create(name){
//
//   var ss = SpreadsheetApp.openByUrl(urlDatabase)
//   var ws = ss.getSheetByName("sheet1")
//
//   ws.appendRow([name])
//
//   Logger.log(name + " Someone clicked on page");
// }
//
