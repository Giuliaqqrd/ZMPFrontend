import axios from 'axios';


const PRODUCTS_API_URL = 'http://localhost:8080/api/shop/';

class ProductService {

    getProducts(companyId){
        const params = {
            companyId: companyId
        };
        return axios.get(PRODUCTS_API_URL+"product", {params});
    }

    addNewProduct(product) {
        return axios.post(PRODUCTS_API_URL+"product", product)
    }

    getOrders(companyId) {
        const params = {
            companyId: companyId
        };
        return axios.get(PRODUCTS_API_URL+"order", {params});
    }

    addNewOrder(order) {
        return axios.post(PRODUCTS_API_URL+"order", order);
    }
}

export default new ProductService()