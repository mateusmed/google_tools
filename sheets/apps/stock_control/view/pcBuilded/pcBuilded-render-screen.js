
async function pcBuildedHtmlBuilded() {

    Logger.log('pcBuildedHtmlBuilded init');

    let pcBuildedPage = [];

    let itens = await pcBuildedService.allPcBuilded();

    pcBuildedPage.push(headerMenu());
    pcBuildedPage.push("<br/>");
    pcBuildedPage.push(JSON.stringify(itens));

    return Promise.all(pcBuildedPage);
}

