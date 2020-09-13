const urlDatabase = "https://docs.google.com/spreadsheets/d/1i2NOiagih_MhBoxClr59Lmecux7HatknkZmTFb22YU8/edit#gid=0"


async function getAll(from) {
  
  let ss = SpreadsheetApp.openByUrl(urlDatabase)
  let ws = ss.getSheetByName(from)
  
  return ws.getDataRange().getValues();
}


async function getById(from, id) {
  let ss = SpreadsheetApp.openByUrl(urlDatabase)
  let ws = ss.getSheetByName(from)
  
  let list =  ws.getDataRange().getValues();
  let find = list.filter((item) => {
                              return (item[0] == id);
                         })

  if(find[0] === undefined){
      return [];
  }
  
  return find[0];
}


function createItem(from, item){

  let ss = SpreadsheetApp.openByUrl(urlDatabase);
  let ws = ss.getSheetByName(from);

  let lastRow = ws.getLastRow();
  let id = lastRow + 1;
  item[0] = id;

  ws.getRange(id, 1, 1, 6).setValues([item]);

  return true;
}




function updateItem(from, item){

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

  ws.getRange(id, 2, 1, 5).setValues([item]);

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
