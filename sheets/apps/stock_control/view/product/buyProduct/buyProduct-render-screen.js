
async function buyProductHtmlBuilded(productId){

  let buyProductPage = [];

  let product = await productService.getProductById(productId);
  let status =  await productService.getProductStatus();


  buyProductPage.push(headerMenu());
  buyProductPage.push("<br/>");
  buyProductPage.push(formBuyProduct(product, status));
  
  return Promise.all(buyProductPage);
}

async function formBuyProduct(product, status){

  let form = [];

  form.push(`<div class="container"> 
    
                  ${await messageBox()}
            
                  <h4>Compra ${product.name}:</h4>
             `);

    form.push(`
               <br/>
                    ${await input("", "hidden", "id", product.id)}
                    
               <br/>
                    ${await selectItem("status", "Status", status , "")}
               <br/>     
               <br/>
                    ${await input("Quantidade", "number", "qtd", "")}
               <br/>
                    ${await input("Valor", "number", "value", "")}
               <br/>`);

    form.push(`
        <br/>
        ${await button("save", "Comprar")} 
      </div>`)

    form.push(` `)

  return form.join("");
}