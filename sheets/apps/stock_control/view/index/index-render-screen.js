
async function indexHtmlBuilded(){
  
  let indexPage = [];

  let productService = new ProductDao();

  let headerList = ["Id",
                    "Nome",
                    "Quantidade",
                    "Preço Unidade compra",
                    "Preço unidade Venda",
                    "Descrição",
                    "Action"];

  indexPage.push(headerMenu());
  indexPage.push("<br/>");
  indexPage.push(tableHtml(productService.getAllProducts(), headerList));
  
  return Promise.all(indexPage);
}

