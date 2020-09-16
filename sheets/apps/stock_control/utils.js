

function include(pageName){
  return HtmlService.createHtmlOutputFromFile(pageName).getContent();
}

function getPage(htmlPage){
  return HtmlService.createTemplateFromFile(htmlPage);
}

function currentUrl(){
   return ScriptApp.getService().getUrl()
}


function getListValueFromJson(json){

    let result = [];

    for(let i in json){
        result.push(json[i]);
    }

    return result;
}
