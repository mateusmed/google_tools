/**
* @param {range} sumRange Range to be evaluated
* @param {range} colorRef Cell with background color to be searched for in sumRange
* @return {number}
* @customfunction
*/

var sheet = SpreadsheetApp.getActiveSpreadsheet();


function refresh() {

sheet.getRange('B18').setValue(sumColoredCells("B4:B13", "b6d7a8"));
sheet.getRange('B19').setValue(sumColoredCells("B4:B13", "ea9999"));
sheet.getRange('C18').setValue(sumColoredCells("C4:C13", "b6d7a8"));
sheet.getRange('C19').setValue(sumColoredCells("C4:C13", "ea9999"));
sheet.getRange('D18').setValue(sumColoredCells("D4:D13", "b6d7a8"));
sheet.getRange('D19').setValue(sumColoredCells("D4:D13", "ea9999"));
sheet.getRange('E18').setValue(sumColoredCells("E4:E13", "b6d7a8"));
sheet.getRange('E19').setValue(sumColoredCells("E4:E13", "ea9999"));
sheet.getRange('F18').setValue(sumColoredCells("F4:F13", "b6d7a8"));
sheet.getRange('F19').setValue(sumColoredCells("F4:F13", "ea9999"));
sheet.getRange('G18').setValue(sumColoredCells("G4:G13", "b6d7a8"));
sheet.getRange('G19').setValue(sumColoredCells("G4:G13", "ea9999"));
sheet.getRange('H18').setValue(sumColoredCells("H4:H13", "b6d7a8"));
sheet.getRange('H19').setValue(sumColoredCells("H4:H13", "ea9999"));
sheet.getRange('I18').setValue(sumColoredCells("I4:I13", "b6d7a8"));
sheet.getRange('I19').setValue(sumColoredCells("I4:I13", "ea9999"));
sheet.getRange('J18').setValue(sumColoredCells("J4:J13", "b6d7a8"));
sheet.getRange('J19').setValue(sumColoredCells("J4:J13", "ea9999"));
sheet.getRange('K18').setValue(sumColoredCells("K4:K13", "b6d7a8"));
sheet.getRange('K19').setValue(sumColoredCells("K4:K13", "ea9999"));
sheet.getRange('L18').setValue(sumColoredCells("L4:L13", "b6d7a8"));
sheet.getRange('L19').setValue(sumColoredCells("L4:L13", "ea9999"));
sheet.getRange('L18').setValue(sumColoredCells("M4:M13", "b6d7a8"));
sheet.getRange('L19').setValue(sumColoredCells("M4:M13", "ea9999"));
}


function sumColoredCells(cells, color) {

  var range = sheet.getRange(cells);

  var myColor = color.replace('#', '').toUpperCase();

  var backGrounds = range.getBackgrounds()
  var cellValues = range.getValues()

  var numRows = range.getNumRows();
  var numCols = range.getNumColumns();

  var total = 0;

  for (var i = 1; i <= numRows; i++) {
    for (var j = 1; j <= numCols; j++) {

      var k = i-1;
      var l = j-1;

      var background = backGrounds[k][l];
      var background = background.replace('#', '').toUpperCase();

      if(background == myColor){
          var valCell = cellValues[k][l];
          total = total + valCell;
      }
    }
  }

  return total;
};


function teste(){
  sumColoredCells("B4:B10", "b7b7b7")
}





