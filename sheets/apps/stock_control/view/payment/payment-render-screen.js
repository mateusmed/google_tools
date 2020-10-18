
async function paymentHtmlBuilded(){

    let paymentPage = [];

    let partnersInvestors = await partnerDao.getAll();
    let companies = await companyDao.getAll();

    paymentPage.push(headerMenu());
    paymentPage.push(formPayment(partnersInvestors, companies));

    return Promise.all(paymentPage);
}

async function formPayment(partners, companies){

    Logger.log("form payment ", partners);

    let form = [];

    form.push(`<div class="container">
                    
                    <br/>

                    ${await messageBox()}

                    <br/>                    
                    <br/>
                    <h4>Pagamento</h4>
                    <br/>
                    <br/>`);

    form.push( `<div class="form-group-father">`)

    form.push(`<br/>
               ${await selectItem("company", "Empresa pagante", companies, undefined)}
               <br/>`);

    for(let partner of partners){
            form.push(`${await input(partner.name, "number", `partner_${partner.id}`, "")}`)
    }

    form.push( `<br/>
                ${await button("save", "Pagar")}
                </div>`)

    form.push(`</div>`);

    return form.join("");
}