
class PaymentService {

    async savePaymentForm(partnerList){

        try{

            Logger.log("[paymentService] received data ", JSON.stringify(partnerList));

            let company = await partnerDao.getPartnerCompany();

            let promises = [];

            for(let partner of partnerList){

                let cash = await paymentDao.getPaymentsOfPartner(company.id);
                let debit = (cash - partner.value);

                if(debit >= 0){

                    //debita
                    promises.push(paymentDao.save(["", company.id, - partner.value]));

                    //credita
                    promises.push(paymentDao.save(["", partner.id, partner.value]));
                }
            }

            let operations = (promises.length / 2);

            Logger.log("[paymentService] operations ", operations);
            Logger.log("[paymentService] partnerList.length ", partnerList.length);

            if(operations !== partnerList.length){
                return await renderMessageResponse("warning", "saldo insuficiente, atualize a página");
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

async function savePayment(data){
    return await paymentService.savePaymentForm(data);
}


const paymentService = new PaymentService();
