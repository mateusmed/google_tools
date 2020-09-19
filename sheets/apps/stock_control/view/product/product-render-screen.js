
async function productHtmlBuilded(productId){

  let productPage = [];

  let partnerList = await partnerDao.getAllPartner();

  Logger.log("event" + JSON.stringify(partnerList));

  if(productId === undefined || productId === "undefined"){
    productPage.push(headerMenu());
    productPage.push(formProduct(undefined, partnerList));
    return Promise.all(productPage);
  }


  let product = await productDAO.getProductById(productId);

  productPage.push(headerMenu());
  productPage.push("<br/>");
  productPage.push(formProduct(product, partnerList));
  
  return Promise.all(productPage);
}

//todo colocar o formulario de investimento
async function formProduct(product, partnerList){

  //todo pensar em uma maneira mais inteligente
  //todo isso aqui acontece quando é a criação de um novo produto

  return `<div class="container">
    
      ${await messageBox()}
    
      <div class="form-group-father">
        ${await input("", "hidden", "id", product.id, "disabled")}
        ${await input("Nome", "text", "name", product.name)}
        ${await input("Quantidade", "number", "qtd", product.quantity)}
        ${await input("Preço unidade compra", "number", "ppuc", product.purchaseUnitPrice)}
        ${await input("Preço unidade venda", "number", "ppuv", product.estimatedUnitSalePrice)}        
        ${await input("Descrição", "text", "description", product.description)}
        
        
        ${await input("Descrição", "text", "description", JSON.stringify(partnerList))}
        
        
        ${await button("save", "salvar")}
      </div>`
}