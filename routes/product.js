// const router = require("express").Router();

// /* GET products page */
// router.get("/", (req, res, next) => {
//   res.render("product");
// });

// module.exports = router;



const express = require('express');
const router = express.Router();


// Require and instance our API handler to proceed
const ProductService = require('../service');
const productApiHandler = new ProductService();

router.get('/product', (req, res) => {
  productApiHandler
    .getAllProduct()
    .then((response) => res.render("pages/product-list", { product: response.data }))
    .catch((error) => console.log(error));
});

/* ... */

router.get('/create', (req, res) => res.render(`pages/rankings`));

router.post('/create', (req, res) => {
  const productInfo = req.body;

  productApiHandler
    .createProduct(productInfo)
    .then(response => res.redirect(`/product-list`))
    .catch(error => console.log(error));
});

/* ... */
//edit product favs list and auto fill

router.get('/edit/:id', (req, res) => {
  const productId = req.params.id;

  productApiHandler
    .getOneProduct(productId)
    .then((response) => res.render("rankings", { product: response.data }))
    .catch((error) => console.log(error));
});


router.post('/edit/:id', (req, res) => {
  const productId = req.params.id;
  const productInfo = req.body;

  productApiHandler
    .editProduct(productId, productInfo)
    .then(() => res.redirect('/product/list'))
    .catch((error) => console.log(error));
});

/* ... */
router.get('/delete/:id', (req, res) => {
  const productId = req.params.id;

  productApiHandler
    .deleteProduct(productId)
    .then(() => res.redirect(`/product-list`))
    .catch((error) => console.log(error));
});

/* ... */

module.exports = router;