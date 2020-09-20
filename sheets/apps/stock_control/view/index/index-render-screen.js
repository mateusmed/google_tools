
async function indexHtmlBuilded(){
  
  let indexPage = [];
  //todo retornar o objeto
  let products = await productDAO.getAllProducts();

  let headerList = ["Id",
                    "Nome",
                    "Quantidade",
                    "Preço Unidade compra",
                    "Preço unidade Venda",
                    "Descrição",
                    "Action"];

  indexPage.push(headerMenu());
  indexPage.push("<br/>");
  indexPage.push(tableHtml(products, headerList));
  
  return Promise.all(indexPage);
}

