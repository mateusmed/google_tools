

async function indexHtmlBuilded(){

  let indexPage = [];

  indexPage.push(headerMenu());
  indexPage.push("<br/>");
  indexPage.push(tableHtml());

  return Promise.all(indexPage);
}


async function messageBox(){
  return '<div id="message-box"></div>';
}

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


async function input(label, type, id, value, disabled){

  if(disabled === undefined){
     disabled = ""
  }

  let forTag = label + "Input";

  return `<div class="form-group">
               <label for="${id}"> ${label}</label>
               <input type="${type}"
                      id="${id}"
                      value="${value}"
                      class="form-control"
                      aria-describedby="emailHelp"
                      ${disabled}>
           </div>`
}

async function button(id, label){
  return `<button id="${id}" class="btn btn-primary">${label}</button>`
}

async function formProduct(product){

  //if(product === undefined){
  //}

  //_blank - new page
  //frame - show in the iframe with the given name
  //_self - show in the same iframe where the form locates
  //_parent - show in the parent page/iframe of the form's iframe
  //_top - the top most window
  // https://stackoverflow.com/questions/22195065/how-to-send-a-json-object-using-html-form-data

  return `<div class="container">

      ${await messageBox()}

      <div class="form-group-father">
        ${await input("Id", "text", "id", product[0], "disabled")}
        ${await input("Nome", "text", "name", product[1])}
        ${await input("Quantidade", "number", "qtd", product[2])}
        ${await input("Preço unidade compra", "text", "ppuc", product[3])}
        ${await input("Preço unidade venda", "text", "ppuv", product[4])}
        ${await input("Total investido", "text", "ti", product[0], "disabled")}
        ${await input("Descrição", "text", "description", product[5])}
        ${await button("editar", "salvar")}
      </div>`
}



async function headerMenu(){

  let mainText = "NEW HARD";

  return `<nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
    <a class="navbar-brand" href="${currentUrl()}">${mainText}</a>
   <button class="navbar-toggler"
           type="button"
           data-toggle="collapse"
           data-target="#navbarNav"
           aria-controls="navbarNav"
           aria-expanded="false"
           aria-label="Toggle navigation">
   <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse"
        id="navbarNav">
   <ul class="navbar-nav">
      <li class="nav-item">
         <a class="nav-link" href="#">Novo Produto <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
         <a class="nav-link" href="#">Estatistica</a>
      </li>
      <li class="nav-item">
         <a class="nav-link" href="#">Consulta Online</a>
      </li>
   </ul>
   </div>
</nav>`


}


async function tableHtml(){

   let productMatriz = await getAll("products");

   let table = [];

 table.push(
   '<div class="table-responsive">' +
   '<table id="dtBasicExample" ' +
       'class="table table-striped table-bordered table-sm" ' +
       'cellspacing="0" ' +
       'width="50%"> ' +
  '<thead> ' +
    '<tr> ' +
      '<th class="th-sm"> Id </th> ' +
      '<th class="th-sm"> Nome </th> ' +
      '<th class="th-sm"> Quantidade </th> ' +
      '<th class="th-sm"> Preço Unidade compra </th> ' +
      '<th class="th-sm"> Preço unidade Venda </th> ' +
      '<th class="th-sm"> Total investido </th> ' +
      '<th class="th-sm"> Descrição </th> ' +
      '<th class="th-sm"> Action </th> ' +
    '</tr> ' +
  '</thead> ' +
  '<tbody');


   for(let i = 0; i < productMatriz.length; i++){

      let destiny = currentUrl() + "?product="+ productMatriz[i][0];

      table.push(

      '<tr>' +
      '<td>'+ productMatriz[i][0] + '</td> ' +
      '<td>'+ productMatriz[i][1] + '</td> ' +
      '<td>'+ productMatriz[i][2] + '</td> ' +
      '<td>'+ productMatriz[i][3] + '</td> ' +
      '<td>'+ productMatriz[i][4] + '</td> ' +

      '<td>'+ productMatriz[i][2] * productMatriz[i][3]  + '</td> ' +

      '<td>'+ productMatriz[i][5] + '</td> ' +

       ' <td> ' +
       '<a class="btn btn-outline-primary" href="'+ destiny + '"role="button">Edit</a>' +
       '</td> ' +
       '</tr> '
      );
    }

  table.push(" </tr> " +
                "</tbody> " +
                "</table>" +
            "</div>");

  return table.join("");
}




