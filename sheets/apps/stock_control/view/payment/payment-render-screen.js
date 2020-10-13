
async function paymentHtmlBuilded(){

    let paymentPage = [];

    let partners = await partnerDao.getAllPartner();

    let company = partners.filter((item) => {
        return (item.name === "NewHard");
    })

    let cashValue = paymentDao.getPaymentsOfPartner(company[0].id);

    paymentPage.push(headerMenu());
    paymentPage.push(formPayment(partners, cashValue));

    return Promise.all(paymentPage);
}

async function formPayment(partners, cashValue){

    Logger.log("form payment ", partners);

    let form = [];

    form.push(`<div class="container">

                    ${await messageBox()}

                    <br/>                    
                    <br/>
                    <h4>Pagamento</h4>
                    <br/>
                    <h6>Parece que a empresa tem de saldo ${cashValue}</h6>
                    <br/>`);

    form.push( `<div class="form-group-father">`)

    for(let partner of partners){
        if(partner.name !== "NewHard"){
            form.push(`${await input(partner.name, "number", `partner_${partner.id}`, "")}`)
        }
    }

    form.push( `<br/>
                ${await button("save", "Pagar")}
                </div>`)

    form.push(`</div>`);

    return form.join("");
}