function makeRequest(payload){

    let options = {
      "method": "POST",
      headers: {
        Accept: " application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      payload: payload,
    };

    let url = "https://www3.bcb.gov.br/novoselic/rest/taxaSelicApurada/pub/search?page=1&pageSize=20";

    try {

      let jsondata = UrlFetchApp.fetch(url, options);
      let parsedData = JSON.parse(jsondata.getContentText());

      console.info("parsedData " , parsedData);
      //console.log(parsedData.registros[0].taxaAnual.toFixed(2));
      let response = parseFloat(parsedData.registros[0].taxaAnual.toFixed(4)) / 100

      return response;

    } catch (e) {

      let erro = 'Erro ao obter taxa SELIC: ' + e
      console.error(erro);

      return erro
    }

  }

  function SELIC(dataConsulta) {

        if (!dataConsulta){

            console.log("dataConsulta undefined, length");

            let today = Utilities.formatDate(new Date(), "GMT+3", "dd/MM/yyyy");
            let data = {
                "dataInicial": today,
                "dataFinal": today
                };

            var payload = JSON.stringify(data);
            return makeRequest(payload);
        }

        let today = new Date();

        if(dataConsulta.valueOf() > today.valueOf()){
            console.log("data consulta recebeu hoje");
            dataConsulta = today;
        }

        let dataConsultaFormated = Utilities.formatDate(dataConsulta, "GMT+3", "dd/MM/yyyy")

        let data = {
            "dataInicial": dataConsultaFormated,
            "dataFinal": dataConsultaFormated
            };

        var payload = JSON.stringify(data);

        console.info("payload: ", payload);
        let response =  makeRequest(payload);

        //if()

        return response;
  }






