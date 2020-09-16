
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

//todo colocar o formulario de investimento
async function formProduct(product){

  //todo pensar em uma maneira mais inteligente
  if (product === undefined){
     product = ["", "", "", "", "", ""];
  }
  
  return `<div class="container">
    
      ${await messageBox()}
    
      <div class="form-group-father">
        ${await input("", "hidden", "id", product.id, "disabled")}
        ${await input("Nome", "text", "name", product.name)}
        ${await input("Quantidade", "number", "qtd", product.quantity)}
        ${await input("Preço unidade compra", "number", "ppuc", product.purchaseUnitPrice)}
        ${await input("Preço unidade venda", "number", "ppuv", product.estimatedUnitSalePrice)}        
        ${await input("Descrição", "text", "description", product.description)}
        
        ${await button("save", "salvar")}
      </div>`
}