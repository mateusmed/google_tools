/**
* @param {range} sumRange Range to be evaluated
* @param {range} colorRef Cell with background color to be searched for in sumRange
* @return {number}
* @customfunction
*/

var sheet = SpreadsheetApp.getActiveSpreadsheet();


function refresh() {

  let colunsLetters = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
  let linePayed = '19'
  let lineOwing = '20'

  let rangeInit = '4'
  let rangeLentgh = '13'


  colunsLetters.forEach((letter) => {

      let formatLimitStr = letter+rangeInit+':'+letter+rangeLentgh
      console.log(formatLimitStr);

      sheet.getRange(letter + linePayed).setValue(sumColoredCells(formatLimitStr, "b6d7a8"));
      sheet.getRange(letter + lineOwing).setValue(sumColoredCells(formatLimitStr, "ea9999"));

  })

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





