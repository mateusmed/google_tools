

function include(pageName){
  return HtmlService.createHtmlOutputFromFile(pageName).getContent();
}

function getPage(htmlPage){
  return HtmlService.createTemplateFromFile(htmlPage);
}

function currentUrl(){
   return ScriptApp.getService().getUrl()
}


function getDateNow(myDate){

    if(myDate !== undefined){

        let date = new Date(myDate);
        return formatDate(date);
    }

    let today = new Date();
    return formatDate(today);
}


function formatDate(dateParam){

    let date = dateParam;
    let  dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();

    date = dd + '/' + mm + '/' + yyyy;

    return date;
}
