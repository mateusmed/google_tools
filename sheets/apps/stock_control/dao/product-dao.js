
class ProductDao{

    constructor() {
        this.productTable = database.getTable("product");
    }

    async getAll() {

        let productList = await genericDAO.getAll(this.productTable.name);
        let idCompanyIndex = this.productTable.columns.indexOf("id_company");

        let productDTOList = [];

        for(let product of productList){

            let idCompany = product[idCompanyIndex]
            let company = await companyDao.getCompanyById(idCompany)

            productDTOList.push(new ProductDTO(product, company))
        }

        return productDTOList;
    }

    async getById(productId) {
        let idCompanyIndex = this.productTable.columns.indexOf("id_company");

        let product = await genericDAO.getById(this.productTable.name, productId);

        let idCompany = product[idCompanyIndex];

        let company = await companyDao.getCompanyById(idCompany);

        let productDTO = new ProductDTO(product, company);

        Logger.log("[productDao - company] ", JSON.stringify(productDTO));

        return productDTO;
    }


    async saveProduct(productArrayValues){
        await genericDAO.createItem(this.productTable.name,
                                           productArrayValues,
                                           this.productTable.columns.length);
    }

    async updateProduct(productArrayValues){
        return await genericDAO.updateItem(this.productTable.name,
                                           productArrayValues,
                                           this.productTable.columns.length);
    }

    async saveOrUpdate(productArrayValues){

        if(productArrayValues[0] === undefined || productArrayValues[0] === ""){
            return await genericDAO.createItem(this.productTable.name,
                                         productArrayValues,
                                         this.productTable.columns.length);
        }

        return await genericDAO.updateItem(this.productTable.name,
                                     productArrayValues,
                                     this.productTable.columns.length);
    }

}

const productDAO = new ProductDao();