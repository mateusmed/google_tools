
class ProductDTO {

    constructor(product, investment) {
        this.id = "";
        this.name = "";
        this.quantity = "";
        this.purchaseUnitPrice  = "";
        this.estimatedUnitSalePrice  = "";
        this.description  = "";

        this.investimentList = ""
    }
    to() {
        return "I have a " + this.id;
    }
}

class InvestmentDTO {

    constructor(investment, partnerobj) {
        this.investiment = investment;
        this.partnerobj = partnerobj;
    }
}