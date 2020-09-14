
async function messageBox(){
  return '<div id="message-box"></div>';
}

async function input(label, type, id, value, disabled){
  
  if(disabled === undefined){
     disabled = ""
  }

  if(value === undefined){
      value = "";
  }

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



async function headerMenu(page){
  
  let mainText = "NEW HARD";

  let product = currentUrl() + "/product";
  let sale = currentUrl() + "/sale";
  let statistics = currentUrl() + "/statistics";
  let onlineConsultation = currentUrl() + "/onlineConsultation";

  let headerMenuList = `<nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
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
      
           <li class="nav-item {new-product}">
               <a class="nav-link" href="${product}">Novo Produto </a>
           </li>
          <li class="nav-item {sale}">
             <a class="nav-link" href="${sale}"> Venda </a>
          </li>
          <li class="nav-item {statistic}">
             <a class="nav-link" href="${statistics}">Estatistica</a>
          </li>
          <li class="nav-item {statistic}">
             <a class="nav-link" href="${onlineConsultation}">Consulta Online</a>
          </li>
       </ul>
       </div>
    </nav>`;

    return headerMenuList.replace(`{${page}}`, "active")
}


async function tableHtml(){

   let productService = new ProductDao();
   let productMatriz = await productService.getAllProducts();
  
   let table = [];
  
 table.push(
   `<div class="table-responsive">
   <table id="dtBasicExample" 
       class="table table-striped table-bordered table-sm" 
       cellspacing="0" 
       width="50%"> 
      <thead> 
        <tr> 
          <th class="th-sm"> Id </th> 
          <th class="th-sm"> Nome </th> 
          <th class="th-sm"> Quantidade </th> 
          <th class="th-sm"> Preço Unidade compra </th> 
          <th class="th-sm"> Preço unidade Venda </th> 
          <th class="th-sm"> Descrição </th> 
          <th class="th-sm"> Action </th> 
        </tr> 
      </thead> 
  <tbody`);
  
  
   for(let i = 0; i < productMatriz.length; i++){
      
      let destiny = currentUrl() + "/product?id="+ productMatriz[i][0];
     
      table.push(
      `<tr>
           <td> ${productMatriz[i][0]} </td> 
           <td> ${productMatriz[i][1]} </td>
           <td> ${productMatriz[i][2]} </td>
           <td> ${productMatriz[i][3]} </td>
           <td> ${productMatriz[i][4]} </td> 
           <td> ${productMatriz[i][5]} </td>
           <td> 
                <a class="btn btn-outline-primary" href="${destiny}" role="button">
                   Edit
                </a>
           </td> 
       </tr> `
      );
    }
    
  table.push( ` </tr> 
                </tbody> 
                </table>
                </div>`);
  
  return table.join("");
}




