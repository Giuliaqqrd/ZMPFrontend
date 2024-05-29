import axios from "axios";

const COMPANY_API_URL = 'http://localhost:8080/api/company';

class CompanyService {
    signUpCompany(company) {
        console.log(company);
        return axios.post(COMPANY_API_URL, company);
    }
    loginCompany(email) {
        const params = {
            email: email
        };
        return axios.get(COMPANY_API_URL+'/login', {params})
    }
}

export default new CompanyService()