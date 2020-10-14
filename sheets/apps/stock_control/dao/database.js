
class Database {

    constructor() {
        this.urlDatabase = "https://docs.google.com/spreadsheets/d/1i2NOiagih_MhBoxClr59Lmecux7HatknkZmTFb22YU8/edit#gid=0"
        this.tables = {
            "product": ["id",
                        "name",
                        "quantity",
                        "purchase_unit_price",
                        "estimated_unit_sale_price",
                        "description"],

            "partner": ["id",
                        "name"],

            "investment": ["id",
                           "id_partner",
                           "id_product",
                           "value"],

            "payment": ["id",
                        "id_partner",
                        "value",
                        "date"],

            "sale":["id",
                    "date_sale",
                    "id_product",
                    "quantity",
                    "price_unit_value"]
        }
    }

    getTable(name) {

        let columns = this.tables[name];

        if (columns !== undefined) {
            return {
                "name": name,
                "columns": columns
            }
        }
        //todo throw exception
    }
}


const database = new Database();