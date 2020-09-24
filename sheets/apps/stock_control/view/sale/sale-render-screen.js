
async function saleHtmlBuilded(productId){

    let salePage = [];

    let headerList = ["Id",
                      "Produto",
                      "Quantidade",
                      "Preço unidade Venda",
                      "Data"];

    Logger.log("sale html builded");

    //todo pegar todas as vendas

    if(productId === undefined || productId === "undefined"){
        salePage.push(headerMenu());
        salePage.push(`<span>sales list</span>`);
        return Promise.all(salePage);
    }

    let product = await productDAO.getProductById(productId);

    Logger.log("Sale product: ", JSON.stringify(product));

    salePage.push(headerMenu());
    salePage.push("<br/>");
    salePage.push(formSale(product));

    return Promise.all(salePage);
}



async function formSale(product){

    let form = [];

    //todo montar o form corretamente

    form.push(`<div class="container">
    
      ${await messageBox()}

      <h4>Venda:</h4>  
    
      <div class="form-group-father">

        <span>sales page with product id ${product.id}</span>
            
      </div>`);

    form.push(`</div>`);

    return form.join("");
}