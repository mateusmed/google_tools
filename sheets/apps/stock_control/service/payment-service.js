
class PaymentService {

    async savePaymentForm(data){

        try{

            return await renderMessageResponse("primary", "sucesso ao salvar");

        }catch (error){

            Logger.log("[productService] received data ", JSON.stringify(data));

            return await renderMessageResponse("danger",
                `ocorreu um erro inesperado${JSON.stringify(error)}`);
        }
    }
}

//--------------------------- call from page

async function savePayment(data){

    // saleService.getAllSaleTable()

    return await paymentService.savePaymentForm(data);
}


const paymentService = new PaymentService();
