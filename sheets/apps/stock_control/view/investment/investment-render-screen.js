
async function investmentHtmlBuilded(){

  let investmentPage = [];

  let partnersInvestors = await partnerDao.getAll();
  let companies = await companyService.getAllCompanies();

  investmentPage.push(headerMenu());
  investmentPage.push("<br/>");
  investmentPage.push(investmentForm(partnersInvestors, companies));

  return Promise.all(investmentPage);
}


async function investmentForm(partners, companies){

    Logger.log("form payment ", partners);

    let form = [];

    form.push(`<div class="container">
                    
                    <br/>

                    ${await messageBox()}

                    <br/>                    
                    <br/>
                    <h4>Investimento</h4>
                    <br/>
                    <br/>`);

    form.push( `<div class="form-group-father">`);

    form.push(`<br/>
               ${await selectItem("company", "Empresa", companies, undefined)}
               <br/>`);

    for(let partner of partners){
        form.push(`${await input(partner.name, "number", `partner_${partner.id}`, "")}`)
    }

    form.push( `<br/>
                ${await button("save", "Investir")}
                </div>`)

    form.push(`</div>`);

    return form.join("");
}