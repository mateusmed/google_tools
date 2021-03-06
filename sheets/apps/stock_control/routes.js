//not visible of the user, inside server
function doGet(event) {

  Logger.log("event" + JSON.stringify(event));

  let path = event.pathInfo;

  switch(path) {

    case "listProduct":
      return renderProductTabPage("listProduct");

    case "pcBuilded":
      return newPcbuildedPage(event);

    case "stock":
      return renderPage("stock");

    case "buyProduct":
      return renderBuyProductPage(event);

    case "newProduct":
      return newProductPage(event);

    case "sale":
      return salePage(event);

    case "statistic":
      return renderPage("statistic");

    case "investment":
      return renderPage("investment");

    case "payment":
      return renderPage("payment");

    case "consultation":
      return renderPage("consultation");

    default:
      return renderPage("index");
  }
}

function newProductPage(event){
  let newProductPage = getPage("view/product/newProduct/newProduct");

  if(event.parameters["id"] === undefined){
    newProductPage["productId"] = "null";
  }else{
    newProductPage["productId"] = event.parameters["id"];
  }

  return newProductPage.evaluate();
}

function newPcbuildedPage(event){
  let newPcbuildedPage = getPage("view/pcBuilded/pcBuilded");

  if(event.parameters["id"] === undefined){
    newPcbuildedPage["pcBuildedId"] = "null";
  }else{
    newPcbuildedPage["pcBuildedId"] = event.parameters["id"];
  }

  return newPcbuildedPage.evaluate();
}

function salePage(event){
  let salePage = getPage("view/sale/sale");

  Logger.log("productName" + JSON.stringify(event.parameters["productName"]));

  if(event.parameters["productId"] === undefined){
    salePage["productId"] = "undefined";
    salePage["productName"] = "undefined";
    salePage["qtd"] = "undefined";
  }else{
    salePage["productId"] = event.parameters["productId"];
    salePage["productName"] = event.parameters["productName"];
    salePage["qtd"] = event.parameters["qtd"];
  }

  return salePage.evaluate();
}


function renderBuyProductPage(event){

  let page = getPage(`view/product/buyProduct/buyProduct`);

  if(event.parameters["id"] === undefined){
    page["productId"] = "null";
  }else{
    page["productId"] = event.parameters["id"];
  }

  return page.evaluate();
}


function renderProductTabPage(name){
  let page = getPage(`view/product/${name}/${name}`);
  return page.evaluate();
}


function renderStockPage(name){
  let page = getPage(`view/stock/listStock/${name}`);
  return page.evaluate();
}

function renderPage(name){
  let page = getPage(`view/${name}/${name}`);
  return page.evaluate();
}



//https://www.labnol.org/code/19871-get-post-requests-google-script
// não consigo fazer a requisição por fora
// cross origin problem
function doPost(request){
  
  // do post por dentro do view funciona mas não consigo receber o objeto
  Logger.log("body " + request.body);
  Logger.log("event POST form " + JSON.stringify(request));
  
  // consigo fazer o redirecionamento
  let index = getPage("index");
  return index.evaluate();
}



