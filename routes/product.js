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
const axios = require("axios");
const { response } = require("../app");

/* GET home page */
router.get("/rankings", (req, res, next) => {
  axios
    .get("http://makeup-api.herokuapp.com/api/v1/products.json")
    .then((responseFromTheAPI) => {
      // console.log(responseFromTheAPI.data);
      res.render("/rankings", {
        product: responseFromTheAPI.data,
      });
    });
});

router.post("/create", (req, res) => {
  // console.log(req.body);
  axios
    .post("http://makeup-api.herokuapp.com/api/v1/products.json", req.body)
    .then((responseFromTheAPI) => {
      // console.log("response from POST", responseFromTheAPI.data);
      res.redirect("/rankings");
    });
});

router.get("/edit-product-list/:id", (req, res) => {
  const { id } = req.params;
  const url = `http://makeup-api.herokuapp.com/api/v1/products.json/${id}`;
  axios.get(url).then((responseFromTheAPI) => {
    // console.log("a single character", responseFromTheAPI.data);
    res.render("/edit-product-list", responseFromTheAPI.data);
  });
});

router.post("/edit-product-list/:id", (req, res) => {
  console.log("form data", req.body);
  const { id } = req.params;
  axios
    .put(`http://makeup-api.herokuapp.com/api/v1/products.json/${id}`, req.body)
    .then((responseFromTheAPI) => {
      // console.log("response from Put", responseFromTheAPI.data);
      res.redirect("/rankings");
    });
});

router.post("/product/delete/:id", (req, res) => {
  const { id } = req.params;
  axios
    .delete(`http://makeup-api.herokuapp.com/api/v1/products.json/${id}`)
    .then((responseFromTheAPI) => {
      // console.log("response from Delete", responseFromTheAPI.data);
      res.redirect("/rankings");
    });
});

module.exports = router;