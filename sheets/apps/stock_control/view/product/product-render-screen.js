
async function productHtmlBuilded(productId){

  let productPage = [];

  let partnerList = await partnerDao.getAllPartner();

  Logger.log("partnerList " + JSON.stringify(partnerList));

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


async function formProduct(product, partnerList){

  let form = [];

  form.push(`<div class="container">
    
      ${await messageBox()}

      <h4>Produto:</h4>  
    
      <div class="form-group-father">
        ${await input("", "hidden", "id", product.id, "disabled")}
        ${await input("Nome", "text", "name", product.name)}
        ${await input("Quantidade", "number", "qtd", product.quantity)}
        ${await input("Preço unidade compra", "number", "ppuc", product.purchaseUnitPrice)}
        ${await input("Preço unidade venda", "number", "ppuv", product.estimatedUnitSalePrice)}        
        ${await input("Descrição", "text", "description", product.description)}    
        `);

  form.push("<br>");
  form.push("<h4>Investidores:</h4>");

  for(let partner of partnerList){

    let investmentFind = "";

    investmentFind = product.investiment.filter((item) => {
      return item.partner.name === partner.name;
    })

    if(investmentFind[0] !== undefined){
      investmentFind = investmentFind[0].value;
    }

    form.push(`${await input(partner.name, "text", `partner_${partner.id}`, investmentFind)}`)
  }


  form.push(`      
        ${await button("save", "salvar")}
      </div>`)


  return form.join("");
}