//not visible of the user, inside server
function doGet(event) {

  Logger.log("event.parameters " + JSON.stringify(event.parameters["product"]));

  if(event.parameters != undefined &&
     event.parameters["product"] != null &&
     event.parameters["product"] != ""){

    let productId = event.parameters["product"];

    var editProduct = getPage("editProduct");
    editProduct["productId"] = productId;

    PropertiesService.getScriptProperties().setProperty("productId", productId);

    return editProduct.evaluate();
  }

  var index = getPage("index");
  return index.evaluate();
}


function create(name){

  var ss = SpreadsheetApp.openByUrl(urlDatabase)
  var ws = ss.getSheetByName("sheet1")

  ws.appendRow([name])

  Logger.log(name + " Someone clicked on page");
}

