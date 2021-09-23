// module.exports = app => {
//     app.use('/', require('./base.routes'));
//     app.use('/rankings', require('./products')); // add this!
// };

const axios = require('axios');

class ProductsApi {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://makeup-api.herokuapp.com/api/v1/products.json'
        });
    }

    getAllProducts = () => this.api.get('/product');

    getOneProduct = productId => this.api.get(`/product/${productId}`);

    createProduct = productInfo => this.api.post(`/product`, productInfo);

    editProduct = (productId, productInfo) => this.api.put(`/product/${productId}`, productInfo);

    deleteProduct = productId => this.api.delete(`/product/${productId}`);
}


module.exports = ProductsApi;


