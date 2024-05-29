import axios from "axios";

const COMPANY_API_URL = 'http://localhost:8080/api/company';

class ShopService {
    getCompany() {
        return axios.get(COMPANY_API_URL) ;
    }
}

export default new ShopService()