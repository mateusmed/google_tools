
async function pcBuildedHtmlBuilded(pcBuildedId) {

    Logger.log(`pcBuildedHtmlBuilded init - ${pcBuildedId}`);

    let pcBuildedPage = [];

    if(pcBuildedId === undefined || pcBuildedId == "null"){

        let pcBuilded = await pcBuildedService.getAllPcBuilded();

        let headerList = ["id",
                          "name",
                          "action"];

        let destinyUrl = "/pcBuilded?id=";

        pcBuildedPage.push(headerMenu());
        pcBuildedPage.push("<br/>");
        pcBuildedPage.push(tableEditItem(headerList, pcBuilded, destinyUrl));

        return Promise.all(pcBuildedPage);
    }


    let itens =  await pcBuildedService.getPcBuildedById(pcBuildedId);

    pcBuildedPage.push(headerMenu());
    pcBuildedPage.push("<br/>");
    pcBuildedPage.push(itens);

    return Promise.all(pcBuildedPage);

}

