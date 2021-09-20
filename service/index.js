const axios = require('axios');

class ProductApi {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://makeup-api.herokuapp.com/api/v1/products.json'
        });
    }

    getAllProduct = () => this.api.get('/product');

    getOneProduct = productId => this.api.get(`/product/${id}`);

    createProduct = productInfo => this.api.post(`/product`, productInfo);

    editProduct = (productId, productInfo) => this.api.put(`/product/${id}`, productInfo);

    deleteProduct = productId => this.api.delete(`/product/${id}`);
}

module.exports = ProductApi;



