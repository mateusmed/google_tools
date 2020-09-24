
async function productHtmlBuilded(productId){

  let productPage = [];

  let partnerList = await partnerDao.getAllPartner();

  Logger.log("partnerList " + JSON.stringify(partnerList));

  if(productId === undefined || productId === "undefined"){
    productPage.push(headerMenu());
    productPage.push(formProduct(undefined, partnerList));
    return Promise.all(productPage);
  }

  let product = await productService.getProductById(productId);

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

    let investmentFind = {};

    investmentFind = product.investiment.filter((item) => {
      return item.partner.name === partner.name;
    })

    if(investmentFind[0] !== undefined){
      investmentFind["investment_id"] = investmentFind[0].id;
      investmentFind["value"] = investmentFind[0].value;
    }

    form.push(
        `
        <div id="investment_${investmentFind.investment_id}">
          ${await input("", "hidden", `partner_id`, `${partner.id}`, "disabled")}
          ${await input(partner.name, "number", `value`, investmentFind.value)}
        </div>
        `);
  }

  form.push(`
        <br/>
        ${await button("save", "salvar")}
      </div>`)

  return form.join("");
}