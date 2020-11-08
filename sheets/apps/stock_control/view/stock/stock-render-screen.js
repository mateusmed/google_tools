
async function stockHtmlBuilded(productId){

  let stockPage = [];
  let stockList = await stockService.getAllStock();

  let headerList = ["id", "produto", "status", "quantidade", "preço unidade", "data"];

  Logger.log("[productService] productList ", JSON.stringify(productList));

  stockPage.push(headerMenu());
  stockPage.push("<br/>");
  stockPage.push(tableStock(headerList, stockList));

  return Promise.all(stockPage);

}