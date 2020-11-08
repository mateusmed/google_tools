
async function buyProductHtmlBuilded(){

  let buyProductPage = [];

  let categoryList = await productService.getAllCategoryProducts();
  let productList = await productService.getAllProducts();

  buyProductPage.push(headerMenu());
  buyProductPage.push("<br/>");
  buyProductPage.push(formBuyProduct(categoryList, productList));
  
  return Promise.all(buyProductPage);
}

async function formBuyProduct(categoryList, productList){

  let form = [];

  form.push(`<div class="container">
    
                  ${await messageBox()}
            
                  <h4>Compra:</h4>
             `);

    form.push(`${await selectItem("category", "Escolha uma categoria", categoryList)}
               <br/>
               <br/>`);

    form.push(`${await selectItem("product", "Escolha um produto", productList)}
               <br/>`);

    form.push(`
        <br/>
        ${await button("save", "salvar")} 
      </div>`)

    form.push(` `)

  return form.join("");
}