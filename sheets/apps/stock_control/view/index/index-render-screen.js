
async function indexHtmlBuilded(){
  
  let indexPage = [];
  
  indexPage.push(headerMenu());
  indexPage.push("<br/>");
  indexPage.push(tableHtml());
  
  return Promise.all(indexPage);
}

