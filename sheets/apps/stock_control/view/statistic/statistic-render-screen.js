
async function statisticHtmlBuilded(){

    let statisticPage = [];

    let statisticOfPartners = await statisticService.getStatisticOfPartners();

    Logger.log("statistic html builded => ", JSON.stringify(statisticOfPartners));

    statisticPage.push(headerMenu());
    statisticPage.push("<br/>");
    statisticPage.push(bodyStatistic(statisticOfPartners));

    let html = await Promise.all(statisticPage);

    return {
        "html": html,
        "data": statisticOfPartners
    }
}

async function bodyStatistic(statisticOfPartners){

    let body = [];

    body.push(`<div class="container">
                  
                  ${await messageBox()}

                  <h4>Statistic:</h4>
                    <div class="container">    
                        ${await barChart()}
                        
                        <br/>`);


    body.push(`<div class="row">`)
        for(let item of statisticOfPartners){
            body.push( await doughnutChart(item.id, item.name));
        }

    body.push(`</div>`)

    body.push(`</div>      
              </div>`);

    return body.join("");
}