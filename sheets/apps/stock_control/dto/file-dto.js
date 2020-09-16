

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
            },
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


class Partner {

    constructor(partner) {
        this.id = partner[0];
        this.name = partner[1];
    }
}


class ProductDTO {

    //todo recebendo objeto 'matriz'
    constructor(product, investmentList) {
        this.id = product[0];
        this.name = product[1];
        this.quantity = product[2];
        this.purchaseUnitPrice  = product[3];
        this.estimatedUnitSalePrice = product[4];
        this.description  = product[5];
        this.investiment = investmentList;
    }
}


// add to another local
class InvestmentDTO {

    //pegar objeto com os dados da tabela

    constructor(investment, partner) {
        this.id = investment[0];
        this.value = investment[3];
        this.partner = new Partner(partner);
    }

}