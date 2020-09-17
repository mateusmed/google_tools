

function include(pageName){
  return HtmlService.createHtmlOutputFromFile(pageName).getContent();
}

function getPage(htmlPage){
  return HtmlService.createTemplateFromFile(htmlPage);
}

function currentUrl(){
   return ScriptApp.getService().getUrl()
}


async function getListValueFromJson(json){

    let result = [];

    let promises = json.forEach((item) => {
        return new Promise((resolve, reject) =>{
            result.push(item);
        })
    })

    await Promise.all(promises);

    return result;
}
