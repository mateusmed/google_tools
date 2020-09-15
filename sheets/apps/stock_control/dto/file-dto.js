

let investment = {
        "id": "",
        "product": {
            "id" : "",
            "name":  "",
            "quantity": "",
            "purchaseUnitPrice": "",
            "estimatedUnitSalePrice": "",
            "description": ""
        },
        "partner":{
            "id": "",
            "name": ""
        },
        "valor": ""
    }

let product = {
        "id" : "",
        "name":  "",
        "quantity": "",
        "purchaseUnitPrice": "",
        "estimatedUnitSalePrice": "",
        "description": "",

        "investment":[
            {
                "id": "",
                "valor": "",
                "partner":{
                    "id": "",
                    "name": ""
                }
            }
        ]
    }




class ProductDTO {

    //todo recebendo objeto 'matriz'
    constructor(product, investment) {
        this.id = "";
        this.name = "";
        this.quantity = "";
        this.purchaseUnitPrice  = "";
        this.estimatedUnitSalePrice  = "";
        this.description  = "";

        this.investimentList = ""
    }
}


// add to another local
class InvestmentDTO {

    constructor(investment, partnerobj) {
        this.investiment = investment;
        this.partnerobj = partnerobj;
    }
}