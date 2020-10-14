

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


class PartnerDTO {

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


class ProductTableDTO {

    constructor(product) {

        let productTable = database.getTable("product");

        this.id = product[productTable.columns.indexOf("id")];
        this.name = product[productTable.columns.indexOf("name")];
        this.quantity = product[productTable.columns.indexOf("quantity")];
        this.purchaseUnitPrice  = product[productTable.columns.indexOf("purchase_unit_price")];
        this.estimatedUnitSalePrice = product[productTable.columns.indexOf("estimated_unit_sale_price")];
        this.description  = product[productTable.columns.indexOf("description")];
    }
}

//todo melhorar a estrutura de dto ---> está ruim
// class SaleDTO {
//
//     constructor(sale) {
//
//         let saleTable = database.getTable("sale");
//
//         this.id = sale[saleTable.columns.indexOf("id")];
//         this.dateSale = sale[saleTable.columns.indexOf("date_sale")];
//         this.productId = sale[saleTable.columns.indexOf("id_product")];
//         this.quantity  = sale[saleTable.columns.indexOf("quantity")];
//         this.priceUnitValue = sale[saleTable.columns.indexOf("price_unit_value")];
//     }
// }

class SaleTableDTO {

    constructor(sale, product) {

        let saleTable = database.getTable("sale");
        let productTable = database.getTable("product");

        let dateSale = sale[saleTable.columns.indexOf("date_sale")];

        this.id = sale[saleTable.columns.indexOf("id")];
        this.dateSale = getDate(dateSale);
        this.productName = product[productTable.columns.indexOf("name")];
        this.quantity  = sale[saleTable.columns.indexOf("quantity")];
        this.priceUnitValue = sale[saleTable.columns.indexOf("price_unit_value")];
    }
}


class InvestmentDTO {

    constructor(investment, partner) {

        let investmentTable = database.getTable("investment");

        this.id = investment[investmentTable.columns.indexOf("id")];
        this.value = investment[investmentTable.columns.indexOf("value")];
        this.partner = new PartnerDTO(partner);
    }

}