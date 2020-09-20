
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

    return `
            <label for="${id}"> ${label}</label>
               <input type="${type}"
                      id="${id}" 
                      value="${value}" 
                      class="form-control" 
                      aria-describedby="emailHelp" 
                      ${disabled}>
           `
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
             <a class="nav-link" href="${sale}"> Vendas </a>
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

//todo tornar o mais generico possível
async function tableHtml(itemList, headerList){

   let itemMatriz = await itemList;
  
   let table = [];
  
   table.push(
       `<div class="table-responsive">
       <table id="dtBasicExample" 
           class="table table-striped table-bordered table-sm" 
           cellspacing="0" 
           width="50%"> 
          <thead> 
            <tr>`);

              headerList.map((item) => {
                  table.push(`<th class="th-sm"> ${item} </th>`);
              });

    table.push( `</tr> 
          </thead> 
        <tbody>`);


   for(let item of itemList){
      
      let editDestiny = currentUrl() + "/product?id="+ item.id;
      let saleDestiny = currentUrl() + "/sale?productId="+ item.id;
     
      table.push(
      `<tr>
           <td> ${item.id} </td> 
           <td> ${item.name} </td>
           <td> ${item.quantity} </td>
           <td> ${item.purchaseUnitPrice} </td>
           <td> ${item.estimatedUnitSalePrice} </td> 
           <td> ${item.description} </td>
           <td> 
           
           <div class="btn-group">
                <a class="btn btn-outline-primary" href="${editDestiny}" role="button">
                   Editar
                </a>
                <a class="btn btn-outline-primary" href="${saleDestiny}" role="button">
                   Vendemos
                </a>
            </div>
            
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




