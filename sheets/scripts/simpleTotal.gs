/**
   mmed
*/

var sheet = SpreadsheetApp.getActiveSpreadsheet();


function updateTotal(){

  const destiny = 'J'
  const qtd = 'F'
  const valor = 'G'

  var numRows = sheet.getLastRow();

  for (var i = 2; i <= numRows; i++) {

    let insert = sheet.getRange(qtd + i).getValue() * sheet.getRange(valor + i).getValue()
    sheet.getRange(destiny + i).setValue(insert);

  }
}