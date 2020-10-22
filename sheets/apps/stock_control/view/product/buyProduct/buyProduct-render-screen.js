
async function newProductHtmlBuilded(){

  let newProductPage = [];

  let categoryList = await productService.getAllCategoryProducts();

  newProductPage.push(headerMenu());
  newProductPage.push("<br/>");
  newProductPage.push(formNewProduct(categoryList));
  
  return Promise.all(newProductPage);
}

async function formNewProduct(categoryList){

  let form = [];

  form.push(`<div class="container">
    
                  ${await messageBox()}
            
                  <h4>Produto:</h4>  
                
                  <div class="form-group-father">
                    ${await input("", "hidden", "id", "", "disabled")}
                    ${await input("Nome", "text", "name", "")}
                    ${await input("Descrição", "text", "description", "")}  
             `);

    form.push(`${await selectItem("category", "Escolha uma categoria", categoryList)}
               <br/>`);

    form.push(`
        <br/>
        ${await button("save", "salvar")} 
      </div>`)

    form.push(` `)

  return form.join("");
}