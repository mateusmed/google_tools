
async function saleHtmlBuilded(productId, productName, qtd){

    let salePage = [];

    Logger.log("sale html builded");

    //todo pegar todas as vendas

    let itensSales =  await saleService.getAllSaleTable();

    let headerList = ["id",
                      "Data Venda",
                      "Nome do produto",
                      "Quantidade",
                      "Preço unidade venda",
                      "ação"]

    if(productId === undefined || productId === "undefined"){
        salePage.push(headerMenu());
        salePage.push("<br/>");
        salePage.push(tableSale(itensSales, headerList));
        return Promise.all(salePage);
    }

    Logger.log("Sale product: ", JSON.stringify(product));

    salePage.push(headerMenu());
    salePage.push("<br/>");
    salePage.push(formSale(productId, productName, qtd));

    return Promise.all(salePage);
}



async function formSale(productId, productName, qtd){

    Logger.log("form sale, ", productId, productName);

    let form = [];

    form.push(`<div class="container">
    
      ${await messageBox()}

      <h4>Venda</h4>
      <br/>
      
      <h4>${productName}</h4>
      <br/>
      
      <h6>Parece que temos ${qtd} unidades disponíveis</h6>
      <br/>
      
      <div class="form-group-father">         
         ${await input("", "hidden", "productId", productId, "disabled")}
         ${await input("Preço unidade", "number", "price", "")}
         ${await input("Quantidade", "number", "qtdSale", 1)}
         <br/>   
         ${await button("save", "Vendido")}
      </div>`);

    form.push(`</div>`);

    return form.join("");
}