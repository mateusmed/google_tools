
async function pcBuildedHtmlBuilded(pcBuildedId) {

    Logger.log('pcBuildedHtmlBuilded init');

    let pcBuildedPage = [];

    if(pcBuildedId === undefined){

        await pcBuildedService.getPcBuildedById(123);

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




}

