// // const router = require("express").Router();

// // /* GET products page */
// // router.get("/", (req, res, next) => {
// //   res.render("product");
// // });

// // module.exports = router;



// const express = require('express');
// const router = express.Router();


// // Require and instance our API handler to proceed
// const ProductService = require('../service');
// const productApiHandler = new ProductService();

// router.get('/product', (req, res) => {
//   productApiHandler
//     .getAllProduct()
//     .then((response) => res.render("pages/product-list", { product: response.data }))
//     .catch((error) => console.log(error));
// });

// /* ... */

// router.get('/create', (req, res) => res.render(`pages/rankings`));

// router.post('/create', (req, res) => {
//   const productInfo = req.body;

//   productApiHandler
//     .createProduct(productInfo)
//     .then(response => res.redirect(`/product-list`))
//     .catch(error => console.log(error));
// });

// /* ... */
// //edit product favs list and auto fill

// router.get('/edit/:id', (req, res) => {
//   const productId = req.params.id;

//   productApiHandler
//     .getOneProduct(productId)
//     .then((response) => res.render("rankings", { product: response.data }))
//     .catch((error) => console.log(error));
// });


// router.post('/edit/:id', (req, res) => {
//   const productId = req.params.id;
//   const productInfo = req.body;

//   productApiHandler
//     .editProduct(productId, productInfo)
//     .then(() => res.redirect('/product/list'))
//     .catch((error) => console.log(error));
// });

// /* ... */
// router.get('/delete/:id', (req, res) => {
//   const productId = req.params.id;

//   productApiHandler
//     .deleteProduct(productId)
//     .then(() => res.redirect(`/product-list`))
//     .catch((error) => console.log(error));
// });

// /* ... */

// module.exports = router;
const express = require("express");


const router = require("express").Router();
const Product = require('../models/Product.model')

/* GET products page */
router.get("/", (req, res, next) => {
  Product.find({}).limit(20).then((responseFromDB) => {

    res.render("pages/list", { products: responseFromDB });
  })
});

module.exports = router;



// const express = require('express');
// const router = express.Router();


// // Require and instance our API handler to proceed
// const ProductService = require('../service');
// const productApiHandler = new ProductService();

// router.get('/product', (req, res) => {
//   productApiHandler
//     .getAllProduct()
//     .then((response) => res.render("pages/product-list", { product: response.data }))
//     .catch((error) => console.log(error));
// });

// /* ... */

// router.get('/create', (req, res) => res.render(`pages/rankings`));

// router.post('/create', (req, res) => {
//   const productInfo = req.body;

//   productApiHandler
//     .createProduct(productInfo)
//     .then(response => res.redirect(`/product-list`))
//     .catch(error => console.log(error));
// });

// /* ... */
// //edit product favs list and auto fill

// router.get('/edit/:id', (req, res) => {
//   const productId = req.params.id;

//   productApiHandler
//     .getOneProduct(productId)
//     .then((response) => res.render("rankings", { product: response.data }))
//     .catch((error) => console.log(error));
// });


// router.post('/edit/:id', (req, res) => {
//   const productId = req.params.id;
//   const productInfo = req.body;

//   productApiHandler
//     .editProduct(productId, productInfo)
//     .then(() => res.redirect('/product/list'))
//     .catch((error) => console.log(error));
// });

// /* ... */
// router.get('/delete/:id', (req, res) => {
//   const productId = req.params.id;

//   productApiHandler
//     .deleteProduct(productId)
//     .then(() => res.redirect(`/product-list`))
//     .catch((error) => console.log(error));
// });

// /* ... */

// module.exports = router;
// const express = require("express");


// const router = require("express").Router();
// const axios = require("axios");
// const { response } = require("../app");


/* GET home page */
// router.get("/rankings", (req, res, next) => {
//   axios
//     .get("http://makeup-api.herokuapp.com/api/v1/products.json")
//     .then((responseFromTheAPI) => {
//       // console.log(responseFromTheAPI.data);
//       res.render("/rankings", {
//         product: responseFromTheAPI.data,
//       });
//     });
// });

// router.post("/create", (req, res) => {
//   // console.log(req.body);
//   axios
//     .post("http://makeup-api.herokuapp.com/api/v1/products.json", req.body)
//     .then((responseFromTheAPI) => {
//       // console.log("response from POST", responseFromTheAPI.data);
//       res.redirect("/rankings");
//     });
// });

// router.get("/create/:id", (req, res) => {
//   const { id } = req.params;
//   const url = `http://makeup-api.herokuapp.com/api/v1/products.json/${id}`;
//   axios.get(url).then((responseFromTheAPI) => {
//     // console.log("a single character", responseFromTheAPI.data);
//     res.render("/create", responseFromTheAPI.data);
//   });
// });

// router.post("/create/:id", (req, res) => {
//   console.log("form data", req.body);
//   const { id } = req.params;
//   axios
//     .put(`http://makeup-api.herokuapp.com/api/v1/products.json/${id}`, req.body)
//     .then((responseFromTheAPI) => {
//       // console.log("response from Put", responseFromTheAPI.data);
//       res.redirect("/rankings");
//     });
// });

// router.post("/product/delete/:id", (req, res) => {
//   const { id } = req.params;
//   axios
//     .delete(`http://makeup-api.herokuapp.com/api/v1/products.json/${id}`)
//     .then((responseFromTheAPI) => {
//       // console.log("response from Delete", responseFromTheAPI.data);
//       res.redirect("/rankings");
//     });
// });

// // module.exports = router;

// const axios = require('axios');

// // Declaring this axios instance...
// const api = axios.create({
//   baseURL: 'http://makeup-api.herokuapp.com/api/v1/products.json?brand'
// });

// // ...allows you to only argument the rest of each URL on every call
// api
//   .get('/rankings')
//   .then(response => console.log(`All characters are: `, response.data))
//   .catch(error => console.log(error));

// // api
// //   .get('/characters/264')
// //   .then(response => console.log(`Character with ID 264 is:`, response.data))
// //   .catch(error => console.log(error));


// service/index.js

// module.exports = app => {
//   app.use('/', require('./base.routes'));
//   app.use('/rankings', require('./products')); // add this!
// };

// const axios = require('axios');

// class ProductsApi {
//   constructor() {
//     this.api = axios.create({
//       baseURL: 'http://makeup-api.herokuapp.com/api/v1/products.json?brand'
//     });
//   }

//   getAllProducts = () => this.api.get('/rankings');

//   getOneProduct = productId => this.api.get(`/rankings/${productId}`);

//   createProduct = productInfo => this.api.post(`/rankings`, productInfo);

//   editProduct = (productId, productInfo) => this.api.put(`/rankings/${productId}`, productInfo);

//   deleteProduct = productId => this.api.delete(`/rankings/${productId}`);
// }



// const myApi = new ProductsApi();

// myApi
//   .getAllProducts()
//   .then(response => console.log(`All characters are:`, response.data))
//   .catch(error => console.log(error));



// module.exports = ProductsApi;
