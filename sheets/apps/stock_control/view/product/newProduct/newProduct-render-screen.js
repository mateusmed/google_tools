
async function newProductHtmlBuilded(productId){

  let newProductPage = [];

  let categoryList = await productService.getAllCategoryProducts();

  if(productId === undefined){

    newProductPage.push(headerMenu());
    newProductPage.push("<br/>");
    newProductPage.push(formNewProduct(categoryList));

    return Promise.all(newProductPage);
  }


  let product = await productService.getProductById(productId);

  newProductPage.push(headerMenu());
  newProductPage.push("<br/>");
  newProductPage.push(formNewProduct(categoryList, product));

  return Promise.all(newProductPage);

}

async function formNewProduct(categoryList, product){

  let form = [];

  form.push(`<div class="container">
    
                  ${await messageBox()}
            
                  <h4>Produto:</h4>`);

    form.push(`<div class="form-group-father">
                    ${await input("", "hidden", "id", product.id, "disabled")}
                    ${await input("Nome", "text", "name", product.name)}
                    ${await input("Descrição", "text", "description", product.description)}`);

    form.push(`${await selectItem("category", "Escolha uma categoria", categoryList, product.category)}
               <br/>`);

    form.push(` <br/>
                    ${await button("save", "salvar")} 
              </div>`)

    form.push(` `)

  return form.join("");
}