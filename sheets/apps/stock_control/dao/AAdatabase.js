
//need to be loading first
class AAdatabase {

    constructor() {
        this.urlDatabase = "https://docs.google.com/spreadsheets/d/1i2NOiagih_MhBoxClr59Lmecux7HatknkZmTFb22YU8/edit#gid=0"
        this.tables = {

            "entity":["id",
                      "name",
                      "type"],

            "product": ["id",
                        "name",
                        "description",
                        "id_category"],

            "pcLinks": ["id_pcBuilded",
                        "link"],

            "stock": ["id",
                      "id_product",
                      "id_status",
                      "quantity",
                      "value_unit",
                      "date"],

            "investment": ["id",
                           "id_partner",
                           "id_company",
                           "value",
                           "date"],

            "finance": ["id",
                        "id_user",
                        "value",
                        "date"],

            "sale":["id",
                    "date",
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


const database = new AAdatabase();