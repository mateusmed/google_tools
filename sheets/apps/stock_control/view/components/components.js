
async function messageBox(){
  return '<div id="message-box"></div>';
}

/*

primary
secondary
success
danger
warning
info
light
dark

*/
async function renderMessageResponse(typeAlert, message){

    return `<div class="alert alert-${typeAlert}" role="alert">
                      ${message}
            </div>`
}


async function selectItem(id, label, itens, selected){

    let selectItem = [];

    selectItem.push(`<label for="${id}"> ${label}</label>`)
    selectItem.push(`<select class="browser-default custom-select" name="${id}" id="${id}">`);

    if(selected === undefined){
        selectItem.push(`<option>Select</option>`);
    }

    for(let item of itens){

        if(selected !== undefined && item.id === selected.id){
            selectItem.push(`<option selected value="${item.id}">${item.name}</option>`)
        }else{
            selectItem.push(`<option value="${item.id}">${item.name}</option>`)
        }
    }

    selectItem.push(`</select>`);

    return selectItem.join("");
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

  let newProduct = currentUrl() + "/newProduct";
  let buyProduct = currentUrl() + "/buyProduct";
  let listProduct = currentUrl() + "/listProduct";

  let stock = currentUrl() + "/stock";

  let sale = currentUrl() + "/sale";
  let statistic = currentUrl() + "/statistic";
  let payment = currentUrl() + "/payment";
  let consultation = currentUrl() + "/consultation";
  let investment = currentUrl() + "/investment";

  let pcBuilded = currentUrl() + "/pcBuilded";



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
      
          <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Produto
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="${listProduct}">Lista de produtos</a>
                      <a class="dropdown-item" href="${newProduct}">Novo Produto</a>                      
                      <a class="dropdown-item" href="${buyProduct}">Comprar produto</a>
                </div>
          </li>
          <li class="nav-item {new-product}">
               <a class="nav-link" href="${stock}">Estoque/vendas </a>
          </li>
          <li class="nav-item {new-product}">
               <a class="nav-link" href="${sale}">Historico de vendas </a>
          </li>
          <li class="nav-item {statistic}">
             <a class="nav-link" href="${statistic}">Estatistica</a>
          </li>
          <li class="nav-item {statistic}">
             <a class="nav-link" href="${investment}">Investimento</a>
          </li>
          <li class="nav-item {statistic}">
             <a class="nav-link" href="${payment}">Pagamento</a>
          </li>          
          <li class="nav-item {statistic}">
             <a class="nav-link" href="${pcBuilded}">Pcs montados</a>
          </li>
          
       </ul>
       </div>
    </nav>`;

    return headerMenuList.replace(`{${page}}`, "active")
}



async function tableEditItem(headerList, itemList, destinyUrl){

   let itemMatriz = await itemList;
  
   let table = [];

    //se itens for vazio montar uma resposta legal.
    if(itemList.length === 0){

    }

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
      
      // let editDestiny = currentUrl() + "/newProduct?id="+ item.id;
      // let saleDestiny = currentUrl() + `/sale?productId=${item.id}&productName=${item.name}&qtd=${item.quantity}`;

       let editDestiny = currentUrl() + `${destinyUrl}${item.id}`;

      table.push(`<tr>`);

       for(let attribute in item){

           if(typeof(item[attribute]) === "object"){
               let obj = item[attribute];
               table.push(`<td> ${obj.name} </td>`);
           }else{
               table.push(`<td> ${item[attribute]} </td>`);
           }
       }

       table.push(`<td>
                       <div class="btn-group">
                           <a class="btn btn-outline-primary" href="${editDestiny}" role="button">
                               Editar
                           </a>
                       </div>
                  </td>`);

      table.push(`</tr>`);

    }
    
    table.push( `  
                  </tbody> 
                  </table>
                  </div>`);
  
  return table.join("");
}


async function doughnutChart(id, title){

    return `<div class="col">
                    <h2>${title}</h2>
                    <canvas id="${id}" style="max-width: 500px;"></canvas>
            </div>`
}



async function barChart(){

    return `<div class="row">        
                  <div class="col">
                        <h2>Estoque/vendidos</h2>
                        <canvas id="barChart" style="max-width: 500px;"></canvas>
                  </div>
                  <div class="col">
                        <h2>Produtos mais velhos</h2>
                        <canvas id="horizontalBar" style="max-width: 500px;"></canvas>
                  </div>
            </div>`
}


//todo [refactory] -  criar uma tabela generica
async function tableSale(itemList, headerList){

    // let itemMatriz = await itemList;
    let table = [];

    //se itens for vazio montar uma resposta legal.
    if(itemList.length === 0){

    }

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

        table.push(
            `<tr>
           <td> ${item.id} </td> 
           <td> ${item.dateSale} </td>
           <td> ${item.productName} </td>
           <td> ${item.quantity} </td>
           <td> ${item.priceUnitValue} </td> 
       </tr> `
        );
    }

    table.push( ` </tr> 
                  </tbody> 
                  </table>
                  </div>`);

    return table.join("");
}