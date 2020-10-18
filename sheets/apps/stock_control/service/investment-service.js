
class InvestmentService {

    async saveInvestmentForm(data){

        try{

            Logger.log("[investmentService] received data ", JSON.stringify(data.partners));

            // let company = await companyDao.getCompanyById(data.companyId);

            let promises = [];

            for(let partner of data.partners){

                if(partner.value !== "" && partner.value > 0){


                    //TODO AVALIAR SE TABELA INVESTIMENTO É NECESSÁRIA
                    //registra investimento
                    promises.push(investmentDAO.save(["",
                                                          partner.id,
                                                          data.companyId,
                                                          partner.value,
                                                          getDate(undefined)]));

                    //debita do valor do saldo do parceiro
                    promises.push(financeDao.save(["",
                                                                 partner.id,
                                                                 - partner.value,
                                                                 getDate(undefined)]));

                    //credita na compania
                    promises.push(financeDao.save(["",
                                                                 data.companyId,
                                                                 partner.value,
                                                                 getDate(undefined)]));
                }
            }

            await Promise.all(promises);

            return await renderMessageResponse("primary", "sucesso ao salvar");

        }catch (error){

            return await renderMessageResponse("danger",
                `ocorreu um erro inesperado${JSON.stringify(error)}`);
        }
    }
}

//--------------------------- call from page
async function saveInvestment(data){
    return await investmentService.saveInvestmentForm(data);
}


const investmentService = new InvestmentService();
