
async function listProductHtmlBuilded(){

  let listProductPage = [];
  let productList = await productService.getAllProducts();

  let headerList = ["id", "name", "description", "category", "action"];

  Logger.log("[productService] productList ", JSON.stringify(productList));

  listProductPage.push(headerMenu());
  listProductPage.push("<br/>");
  listProductPage.push(tableEditItem(headerList, productList, "/newProduct?id="));
  
  return Promise.all(listProductPage);
}
