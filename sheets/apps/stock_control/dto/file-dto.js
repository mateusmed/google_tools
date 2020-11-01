
class PcBuildedDTO {

    constructor(pc, links, costValue) {
        this.id = pc.id;
        this.name = pc.name;
        this.links = links;
        this.costValue = costValue;
    }
}


class PartnerDTO {

    constructor(partner) {

        let partnerTable = database.getTable("partner");

        this.id = partner[partnerTable.columns.indexOf("id")];
        this.name = partner[partnerTable.columns.indexOf("name")];
    }
}

class CompanyDTO {

    constructor(company) {

        let companyTable = database.getTable("company");

        this.id = company[companyTable.columns.indexOf("id")];
        this.name = company[companyTable.columns.indexOf("name")];
    }
}


class EntityDTO {

    constructor(entity) {

        let entityTable = database.getTable("entity");

        this.id = entity[entityTable.columns.indexOf("id")];
        this.name = entity[entityTable.columns.indexOf("name")];
        this.type = entity[entityTable.columns.indexOf("type")];
    }
}

class ProductDTO {

    constructor(product, entity) {
        let productTable = database.getTable("product");

        this.id = product[productTable.columns.indexOf("id")];
        this.name = product[productTable.columns.indexOf("name")];
        this.description = product[productTable.columns.indexOf("description")];
        this.category = entity;
    }
}

class StockDTO {
    constructor(product, company) {
        let stockTable = database.getTable("stock");

        this.id = product[stockTable.columns.indexOf("id")];
        this.name = product[stockTable.columns.indexOf("name")];
        this.quantity = product[stockTable.columns.indexOf("quantity")];
        this.purchaseUnitPrice  = product[stockTable.columns.indexOf("purchase_unit_price")];
        this.estimatedUnitSalePrice = product[stockTable.columns.indexOf("estimated_unit_sale_price")];
        this.description  = product[stockTable.columns.indexOf("description")];
        this.company = company;
    }
}

class SaleDTO {

    constructor(sale, product) {

        let saleTable = database.getTable("sale");

        this.id = sale[saleTable.columns.indexOf("id")];
        this.dateSale = sale[saleTable.columns.indexOf("date")];
        this.product = product;
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