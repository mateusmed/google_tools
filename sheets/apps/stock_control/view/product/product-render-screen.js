
async function productHtmlBuilded(productId){

  let productPage = [];

  if(productId === undefined || productId === "undefined"){
    productPage.push(headerMenu());
    productPage.push(formProduct(undefined));
    return Promise.all(productPage);
  }


  let productService = new ProductDao();
  let product = await productService.getProductById(productId);

  productPage.push(headerMenu());
  productPage.push("<br/>");
  productPage.push(formProduct(product));
  
  return Promise.all(productPage);
}

async function formProduct(product){

  //todo pensar em uma maneira mais inteligente
  if (product === undefined){
     product = ["", "", "", "", "", ""];
  }
  
  return `<div class="container">
    
      ${await messageBox()}
    
      <div class="form-group-father">
        ${await input("", "hidden", "id", product[0], "disabled")}
        ${await input("Nome", "text", "name", product[1])}
        ${await input("Quantidade", "number", "qtd", product[2])}
        ${await input("Preço unidade compra", "number", "ppuc", product[3])}
        ${await input("Preço unidade venda", "number", "ppuv", product[4])}        
        ${await input("Descrição", "text", "description", product[5])}
        
        
        
        ${await button("save", "salvar")}
      </div>`
}