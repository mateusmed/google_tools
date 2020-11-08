
async function stockHtmlBuilded(productId){

  let stockPage = [];
  let stockList = await stockService.getAllStock();

  let headerList = ["id",
                    "produto",
                    "status",
                    "quantidade",
                    "preço unidade",
                    "data",
                    "ação"];

  Logger.log("[stock] stockList ", JSON.stringify(stockList));

  stockPage.push(headerMenu());
  stockPage.push("<br/>");
  stockPage.push(tableStock(headerList, stockList));

  return Promise.all(stockPage);

}