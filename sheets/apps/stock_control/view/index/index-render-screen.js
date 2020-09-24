
async function indexHtmlBuilded(){
  
  let indexPage = [];

  let products = await productDAO.getAllProducts();

  //todo adicionar data de criação e data da ultima atualização

  let headerList = ["Id",
                    "Nome",
                    "Quantidade",
                    "Preço Unidade compra",
                    "Preço unidade Venda",
                    "Descrição",
                    "Action"];

  indexPage.push(headerMenu());
  indexPage.push("<br/>");
  indexPage.push(tableProduct(products, headerList));
  
  return Promise.all(indexPage);
}

