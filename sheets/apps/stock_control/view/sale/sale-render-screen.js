
async function saleHtmlBuilded(productId, productName){

    let salePage = [];

    let headerList = ["Id",
                      "Produto",
                      "Quantidade",
                      "Preço unidade Venda",
                      "Data"];

    Logger.log("sale html builded");

    //todo pegar todas as vendas

    let itemListTest = [
        {"id": "1", "name": "nome"},
        {"id": "2", "name": "nome2"}
    ]

    if(productId === undefined || productId === "undefined"){
        salePage.push(headerMenu());
        salePage.push("<br/>");
        salePage.push(tableSale(itemListTest, ["id", "nome", "action"]));
        return Promise.all(salePage);
    }

    Logger.log("Sale product: ", JSON.stringify(product));

    salePage.push(headerMenu());
    salePage.push("<br/>");
    salePage.push(formSale(productId, productName));

    return Promise.all(salePage);
}



async function formSale(productId, productName){

    Logger.log("form sale, ", productId, productName);

    let form = [];

    form.push(`<div class="container">
    
      ${await messageBox()}

      <h4>Venda</h4>
      <br/>
      
      <h4>${productName}</h4>
      <br/>
      
      <div class="form-group-father">         
         ${await input("", "hidden", "productId", productId, "disabled")}
         ${await input("Preço unidade", "number", "price", "")}
         ${await input("Quantidade", "number", "qtd", 1)}
         <br/>   
         ${await button("save", "Vendido")}
      </div>`);

    form.push(`</div>`);

    return form.join("");
}