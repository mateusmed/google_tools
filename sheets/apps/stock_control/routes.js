//not visible of the user, inside server
function doGet(event) {

  Logger.log("event" + JSON.stringify(event));

  let path = event.pathInfo;

  switch(path) {
    case "product":
      return productPage(event);

    case "sale":
      return salePage(event);

    case "statistic":
      return statisticPage(event);

    case "consultation":
      return consultationPage(event);

    default:
       return indexPage();
  }
}

function indexPage(){
  let index = getPage("view/index/index");
  return index.evaluate();
}

function productPage(event){
  let productPage = getPage("view/product/product");

  if(event.parameters["id"] === undefined){
    productPage["productId"] = "null";
  }else{
    productPage["productId"] = event.parameters["id"];
  }

  return productPage.evaluate();
}

function salePage(event){
  let salePage = getPage("view/sale/sale");

  if(event.parameters["productId"] === undefined){
    salePage["productId"] = "null";
  }else{
    salePage["productId"] = event.parameters["productId"];
    // salePage["productName"] = event.parameters["productName"];
  }

  return salePage.evaluate();
}


function statisticPage(event){
  let statisticPage = getPage("view/statistic/statistic");
  return statisticPage.evaluate();
}


function consultationPage(event){
  let consultationPage = getPage("view/consultation/consultation");
  return consultationPage.evaluate();
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



