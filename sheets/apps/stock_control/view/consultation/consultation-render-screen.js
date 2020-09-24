
async function consultationHtmlBuilded(){

    let consultationPage = [];

    Logger.log("consultation html builded");

    consultationPage.push(headerMenu());
    consultationPage.push("<br/>");
    consultationPage.push(bodyConsultation());

    return Promise.all(consultationPage);
}



async function bodyConsultation(){

    let body = [];

    body.push(`<div class="container">
    
      ${await messageBox()}

      <h4>Consultation:</h4>  
    
      <div class="form-group-father">

        <span>consultation page</span>
            
      </div>`);

    body.push(`</div>`);

    return body.join("");
}