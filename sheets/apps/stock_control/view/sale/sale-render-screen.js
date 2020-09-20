
async function saleHtmlBuilded(productId){

    let salePage = [];

    let headerList = ["Id",
                      "Produto",
                      "Quantidade",
                      "Preço unidade Venda",
                      "Data"];

    //todo pegar todas as vendas

    Logger.log("partnerList " + JSON.stringify(partnerList));

    if(productId === undefined || productId === "undefined"){
        salePage.push(headerMenu());
        salePage.push(tableHtml(products, headerList));
        return Promise.all(salePage);
    }

    let product = await productDAO.getProductById(productId);

    salePage.push(headerMenu());
    salePage.push("<br/>");
    salePage.push(formSale(product, partnerList));

    return Promise.all(salePage);
}



async function formSale(){

    let form = [];

    //todo montar o form corretamente

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
            
      </div>`);

    form.push(`</div>`);


}