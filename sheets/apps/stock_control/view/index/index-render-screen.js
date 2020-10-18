
async function indexHtmlBuilded(){
  
  let indexPage = [];

  let products = await productService.getAllProducts();

  //todo adicionar data de criação e data da ultima atualização

    // "Criado",
    // "Ultima atualização",

  let headerList = ["Id",
                    "Nome",
                    "Quantidade",
                    "Preço Unidade compra",
                    "Preço unidade Venda",
                    "Descrição",
                    "Pertence",
                    "Action"];

  indexPage.push(headerMenu());
  indexPage.push("<br/>");
  indexPage.push(tableProduct(products, headerList));
  
  return Promise.all(indexPage);
}

