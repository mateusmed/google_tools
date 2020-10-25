
async function myFunction() {

    var response = await UrlFetchApp.fetch("https://www.boadica.com.br/pesquisa/cpu_plmae/precos?ClasseProdutoX=5&CodCategoriaX=13&XT=2&XE=2&XG=4", {'muteHttpExceptions': true});
    Logger.log(response);

    var content = response.getContentText();

    return content;
}




async function pcBuildedHtmlBuilded() {

    Logger.log('pcBuildedHtmlBuilded init');

    let pcBuildedPage = [];

    let response = await myFunction();
    Logger.log('response --> ', response);

    pcBuildedPage.push(headerMenu());
    pcBuildedPage.push("<br/>");
    pcBuildedPage.push(response);

    return Promise.all(pcBuildedPage);
}

