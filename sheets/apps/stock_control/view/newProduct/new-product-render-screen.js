
async function newProductHtmlBuilded(){

    let indexPage = [];

    indexPage.push(headerMenu("new-product"));
    indexPage.push("<br/>");
    indexPage.push("newProductPage");

    return Promise.all(indexPage);
}

