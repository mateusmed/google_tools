
async function editProductHtmlBuilded(productId){

  let product = await getById("products", productId);

  let editProductPage = [];

  if(product.length === 0){
    editProductPage.push(headerMenu());
    editProductPage.push("<span> produto não encontrado </span>");
    return Promise.all(editProductPage);
  }

  editProductPage.push(headerMenu());
  editProductPage.push("<br/>");
  editProductPage.push(formProduct(product));

  return Promise.all(editProductPage);
}



async function formProduct(product){

  return `<div class="container">

      ${await messageBox()}

      <div class="form-group-father">
        ${await input("Id", "text", "id", product[0], "disabled")}
        ${await input("Nome", "text", "name", product[1])}
        ${await input("Quantidade", "number", "qtd", product[2])}
        ${await input("Preço unidade compra", "text", "ppuc", product[3])}
        ${await input("Preço unidade venda", "text", "ppuv", product[4])}
        ${await input("Descrição", "text", "description", product[5])}
        ${await button("editar", "salvar")}
      </div>`
}