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


  //try to use this method < ---
  //ws.getRowHeight(rowPosition)

  let find = list.filter((item) => {
                         return item[0] = id;
              })

  //validate if find

  return find[0];
}



function getOptions(){
  var ss = SpreadsheetApp.openByUrl(urlDatabase)
  var ws = ss.getSheetByName("options")

  var list = ws.getRange(1,
                         1,
                         ws.getRange("A1").getDataRegion().getLastRow(),
                         1).getValues();

  return list;
}