

function getAlphabet(){
    return "abcdefghijklmnopqrstuvwxyz".split('');
}

function appendAlphabet(alphabetInput){

    let list = [];
    let alphabet = getAlphabet();

    for(let first of alphabetInput){
        for(let second of alphabet){
            list.push(`${first}${second}`);
        }
    }

    return list;
}

function getAllPossibilities(value){

    let finalAlpha = [];

    let alphabet = getAlphabet();
    finalAlpha.push(...alphabet);

    if(value === 0 ){
        console.log("retornando finalAlpha === 0");
        return finalAlpha;
    }

    let count = 1;

    while(count <= value){
        alphabet = appendAlphabet(alphabet);
        finalAlpha.push(...alphabet);
        count++;
    }

    console.log(finalAlpha.length);
    console.log(finalAlpha);

    // saveFile(finalAlpha);
    return finalAlpha;
}

// G
// AZ
async function getListInterval(firstColumn, lastColumn, interval){

    let possibilities = getAllPossibilities(lastColumn.length-1);

    let list = [];

    let indexFirst = possibilities.indexOf(firstColumn);
    let indexLast = possibilities.indexOf(lastColumn);

    console.log("index first ", indexFirst);
    console.log("index last ", indexLast);

    possibilities = possibilities.slice(indexFirst, indexLast);

    for(let i = 0; i <= possibilities.length; i = i + interval){

        console.log("==>", i);
        if(possibilities[i]){
            list.push(possibilities[i]);
        }
    }

    //console.log(list);
    return list;
}


async function SUMCARDLINE(startColumn, finalColumn, line, interval) {

    // G, AZ, 15, 2
    var sheet = SpreadsheetApp.getActiveSpreadsheet();

    let list = await getListInterval(startColumn, finalColumn, interval);

    let total = 0;

    for(let letter of list){

        if(letter){
          let columnName = letter.toUpperCase() + line;

          let valueColumn = sheet.getRange(columnName).getValue();
          console.log(`buscando por coluna: ${columnName} value: ${valueColumn}`);

          if(valueColumn){
            total = total + valueColumn;
          }
        }
    }

    console.log("total is:", total);
    return total;
}



/*
async function mainTest(){

  let response = await SUMCARDLINE("g", "at", "15", 3)
  console.log("respose ===>" , response);
}

//to test invocation
function SUMCARDLINE(startColumn, finalColumn, line, interval) {

    console.log("startColumn = ", startColumn);
    console.log("finalColumn = ", finalColumn);
    console.log("line = ", line);
    console.log("interval = ", interval);

    return startColumn + finalColumn + line + interval;
}
*/







