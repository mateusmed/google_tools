

function include(pageName){
  return HtmlService.createHtmlOutputFromFile(pageName).getContent();
}

function getPage(htmlPage){
  return HtmlService.createTemplateFromFile(htmlPage);
}

function currentUrl(){
   return ScriptApp.getService().getUrl()
}


function getDateNow(){

    let today = new Date();
    let  dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    return today;
}

