// module.exports = app => {
//     app.use('/', require('./base.routes'));
//     app.use('/rankings', require('./products')); // add this!
// };

const axios = require('axios');

class ProductsApi {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://makeup-api.herokuapp.com/api/v1/products.json?brand'
        });
    }

    getAllProducts = () => this.api.get('/rankings');

    getOneProduct = productId => this.api.get(`/rankings/${productId}`);

    createProduct = productInfo => this.api.post(`/rankings`, productInfo);

    editProduct = (productId, productInfo) => this.api.put(`/rankings/${productId}`, productInfo);

    deleteProduct = productId => this.api.delete(`/rankings/${productId}`);
}






module.exports = ProductsApi;


