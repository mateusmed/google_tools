//not visible of the user, inside server
function doGet(event) {

  let path = event.pathInfo;


  Logger.log("event.parameters " + JSON.stringify(event));

  if(event.parameters != undefined &&
     event.parameters["product"] != null &&
     event.parameters["product"] != ""){

    let productId = event.parameters["product"];

    let editProduct = getPage("editProduct");
    editProduct["productId"] = productId;

    return editProduct.evaluate();
  }

  let index = getPage("index");
  return index.evaluate();


  if(path == "newproduct"){
      let page = getPage("index");
      return page.evaluate();
  }

  let page = getPage("index");
  return page.evaluate();
 
}


//https://www.labnol.org/code/19871-get-post-requests-google-script
// não consigo fazer a requisição por fora
// cross origin problem
function doPost(request){

  // do post por dentro do html funciona mas não consigo receber o objeto
  Logger.log("body " + request.body);
  Logger.log("event POST form " + JSON.stringify(request));

  // consigo fazer o redirecionamento
  let index = getPage("index");
  return index.evaluate();
}



