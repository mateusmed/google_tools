

class CompanyService{

    async getAllCompanies(){
        let companies = await companyDao.getAll();
        return companies;
    }

    async getCompanyById(companyId){
        return await companyDao.getById(companyId);
    }

}

const companyService = new CompanyService();