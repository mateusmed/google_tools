

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

        let partnerTable = database.getTable("partner");

        this.id = partner[partnerTable.columns.indexOf("id")];
        this.name = partner[partnerTable.columns.indexOf("name")];
    }
}


class ProductDTO {

    constructor(product, investmentList) {

        let productTable = database.getTable("product");

        this.id = product[productTable.columns.indexOf("id")];
        this.name = product[productTable.columns.indexOf("name")];
        this.quantity = product[productTable.columns.indexOf("quantity")];
        this.purchaseUnitPrice  = product[productTable.columns.indexOf("purchase_unit_price")];
        this.estimatedUnitSalePrice = product[productTable.columns.indexOf("estimated_unit_sale_price")];
        this.description  = product[productTable.columns.indexOf("description")];
        this.investiment = investmentList;
    }
}


class InvestmentDTO {

    constructor(investment, partner) {

        let investmentTable = database.getTable("investment");

        this.id = investment[investmentTable.columns.indexOf("id")];
        this.value = investment[investmentTable.columns.indexOf("value")];
        this.partner = new Partner(partner);
    }

}