
async function productHtmlBuilded(productId){

  let productPage = [];

  let companies = await companyService.getAllCompanies();

  Logger.log("companies ", JSON.stringify(companies));

  if(productId === undefined || productId === "undefined"){
    productPage.push(headerMenu());
    productPage.push(formProduct(undefined, companies));
    return Promise.all(productPage);
  }

  let product = await productService.getProductById(productId);

  productPage.push(headerMenu());
  productPage.push("<br/>");
  productPage.push(formProduct(product, companies));
  
  return Promise.all(productPage);
}


async function formProduct(product, companies){

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

    form.push(`<br/>
               ${await selectItem("company", "Dono do produto", companies, product.company.id)}
               <br/>`);

    form.push(`
        <br/>
        ${await button("save", "salvar")} 
      </div>`)

  return form.join("");
}