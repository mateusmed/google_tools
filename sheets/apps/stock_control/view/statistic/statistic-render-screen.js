
async function statisticHtmlBuilded(){

    let statisticPage = [];

    Logger.log("statistic html builded");

    statisticPage.push(headerMenu());
    statisticPage.push("<br/>");
    statisticPage.push(bodyStatistic());

    return Promise.all(statisticPage);
}



async function bodyStatistic(){

    let body = [];

    //todo montar o form corretamente

    body.push(`<div class="container">
    
      ${await messageBox()}

      <h4>Statistic:</h4>  
    
      <div class="form-group-father">

        <span>statistic page</span>
            
      </div>`);

    body.push(`</div>`);

    return body.join("");
}