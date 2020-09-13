//not visible of the user, inside server
function doGet(event) {

  Logger.log("event" + JSON.stringify(event));

  let path = event.pathInfo;

  switch(path) {
    case "product":
      return productPage(event)

    // case "new-product":
    //   return newProductPage()

    // case "sale":
    //   return newProductPage()

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



