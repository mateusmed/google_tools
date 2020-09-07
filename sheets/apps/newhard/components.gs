

async function indexHtmlBuilded(){

  let indexPage = [];

  indexPage.push(headerMenu());
  indexPage.push("<br/>");
  indexPage.push(tableHtml());

  return Promise.all(indexPage);
}


async function editProductHtmlBuilded(productId){


  Logger.log("editProductHtmlBuilded productId " + productId);

  let product = await getById("products", productId);

  let editProductPage = [];

  editProductPage.push(headerMenu());
  editProductPage.push("<span>" + JSON.stringify(product) +"</span>");

  return Promise.all(editProductPage);
}


async function headerMenu(){

  return "<nav class=\"navbar navbar-expand-lg  navbar-dark bg-dark\">  "+

    "<a class=\"navbar-brand\" href=\"#\">NEW HARD</a>" +
"  <button class=\"navbar-toggler\" "+
"          type=\"button\" data-toggle=\"collapse\" "+
"          data-target=\"#navbarNav\" "+
"          aria-controls=\"navbarNav\" "+
"          aria-expanded=\"false\" "+
"          aria-label=\"Toggle navigation\">"+
"    <span class=\"navbar-toggler-icon\"></span>"+
"  </button>"+
"  <div class=\"collapse navbar-collapse\" "+
"       id=\"navbarNav\">"+
"    <ul class=\"navbar-nav\">"+
"      <li class=\"nav-item active\">"+
"        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>"+
"      </li>"+
"      <li class=\"nav-item\">"+
"        <a class=\"nav-link\" href=\"#\">Features</a>"+
"      </li>"+
"      <li class=\"nav-item\">"+
"        <a class=\"nav-link\" href=\"#\">Pricing</a>"+
"      </li>"+
"      <li class=\"nav-item\">"+
"        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>"+
"      </li>"+
"    </ul>"+
"  </div>"+
"</nav>"

}


async function tableHtml(){

   let productMatriz = await getAll("products");

   let table = [];

 table.push(
   "<div class=\"table-responsive\">" +
   "<table id=\"dtBasicExample\" " +
       "class=\"table table-striped table-bordered table-sm\" " +
       "cellspacing=\"0\" " +
       "width=\"50%\"> " +
  "<thead> " +
    "<tr> " +
      "<th class=\"th-sm\"> Id </th> " +
      "<th class=\"th-sm\"> Nome </th> " +
      "<th class=\"th-sm\"> Quantidade </th> " +
      "<th class=\"th-sm\"> Preço Unidade compra </th> " +
      "<th class=\"th-sm\"> Preço unidade Venda </th> " +
      "<th class=\"th-sm\"> Total investido </th> " +
      "<th class=\"th-sm\"> Descrição </th> " +
      "<th class=\"th-sm\"> Action </th> " +
    "</tr> " +
  "</thead> " +
  "<tbody> ");


   for(let i = 0; i < productMatriz.length; i++){

      let destiny = currentUrl() + "?product="+ productMatriz[i][0];

      table.push(

      "<tr> " +
      "<td>"+ productMatriz[i][0] + "</td> " +
      "<td>"+ productMatriz[i][1] + "</td> " +
      "<td>"+ productMatriz[i][2] + "</td> " +
      "<td>"+ productMatriz[i][3] + "</td> " +
      "<td>"+ productMatriz[i][4] + "</td> " +

      "<td>"+ productMatriz[i][2] * productMatriz[i][3]  + "</td> " +

      "<td>"+ productMatriz[i][5] + "</td> " +

       " <td> " +
       "<a class=\"btn btn-outline-primary\" href=\""+ destiny +"\" role=\"button\">Edit</a> " +
       "</td> " +
       "</tr> "
      );
    }

  table.push(" </tr> " +
                "</tbody> " +
                "</table>" +
            "</div>");

  return table.join("");
}




