
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


    let pcBuildedDTO =  await pcBuildedService.getPcBuildedById(pcBuildedId);

    pcBuildedPage.push(headerMenu());
    pcBuildedPage.push("<br/>");
    pcBuildedPage.push(bodyPcBuilded(pcBuildedDTO));

    return Promise.all(pcBuildedPage);

}


async function bodyPcBuilded(pcBuildedDTO){

    let form = [];

    form.push(`<div class="container">
                  <h4>${pcBuildedDTO.name}</h4>`);

    form.push(`<br>`);

    let header = ["Link", "Valor Médio"];
    form.push(`${ await simpleTableHref(header, pcBuildedDTO.links)}`);

    form.push(`<h4 id="costValue">${pcBuildedDTO.costValue}</h4>`)

    form.push(`<br>`);
    form.push(`${ await input("Porcentagem", "number", "percent", 0)}`)
    form.push(`<br>`);
    form.push(`${await button("calc", "calcular")}`)

    form.push(`<br>`);
    form.push(`<br>`)
    form.push(`${ await input("Resultado", "number", "result", 0)}`)

    form.push(`<br>`);
    form.push(`<br>`);
    form.push(`<br>`);
    form.push(`<br>`);

    form.push(`</div>`);

    return form.join("");
}
