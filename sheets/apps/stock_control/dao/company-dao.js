

class CompanyDao{

    constructor() {
        this.companyTable = database.getTable("company")
    }

    async getAll() {

        let companyList = await genericDAO.getAll(this.companyTable.name);

        let companyDTOList = []

        for (let company of companyList){
            await companyDTOList.push(new CompanyDTO(company));
        }

        return companyDTOList;
    }

    async getCompanyById(id) {

        let company = await genericDAO.getById(this.companyTable.name, id);
        return new CompanyDTO(company);
    }

    async getCompanyByName(name) {

        let nameIndex = this.companyTable.columns.indexOf("name");

        let company = genericDAO.getWhenColumnEqualValue(this.companyTable, nameIndex, name);
        return new CompanyDTO(company);
    }

}

const companyDao = new CompanyDao();