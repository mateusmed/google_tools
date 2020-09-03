
//not visible of the user, inside server
function doGet(event) {

  Logger.log(event);
  return HtmlService.createHtmlOutputFromFile("index");

}

function userClicked(name){

  var url = "https://docs.google.com/spreadsheets/d/1i2NOiagih_MhBoxClr59Lmecux7HatknkZmTFb22YU8/edit#gid=0"
  var ss = SpreadsheetApp.openByUrl(url)
  var ws = ss.getSheetByName("sheet1")

  ws.appendRow([name])

  Logger.log(name + " Someone clicked on page");
}
