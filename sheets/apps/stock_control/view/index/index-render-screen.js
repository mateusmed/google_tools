
async function indexHtmlBuilded(){
  
  let indexPage = [];

  indexPage.push(headerMenu());
  indexPage.push("<br/>");
  indexPage.push("new hard index");
  
  return Promise.all(indexPage);
}

