// module.exports = router;
const { response } = require("express");
const express = require("express");

const router = require("express").Router();
const Product = require('../models/Product.model')

/* GET products page */
router.get("/", (req, res, next) => {
  Product.find({}).lean().limit(2).then((responseFromDB) => {
    console.log({ responseFromDB })

    responseFromDB.forEach(product => {
      product.warm = product.warm?.length || 0;
      product.cool = product.cool?.length || 0;
      product.neutral = product.neutral?.length || 0;
    })
    console.log({ responseFromDB })
    res.render("pages/list", { products: responseFromDB });
  });
});




// router.get("/product/:id", (req, res, next) => {
//   Product.find(req.params.id).then((responseFromDB) => {
//     const counter = 0;
//     const voteNow = responseFromDB.map((votePost) => ({
//       voteUndertone: votePost.voteUndertone.counter += 1,
//     }))
//     res.render("pages/list", { voteNow });
//   })
// });

router.post("/", (req, res, next) => {
  Product.create.then((responseFromDB) => {

    res.render("pages/list", { products: responseFromDB });
  })
});

// router.post("/edit/:id", (req, res, next) => {
//   Product.create.then((responseFromDB) => {

//     res.render("pages/list", { products: responseFromDB });
//   })
// });

// router.get("/:id/edit", (req, res, next) => {

//   Product.findById(req.params.id)
//     .then((bookToBeEditedFromDB) => {  // bookToBeEditedFromDB - placeholder

//       // console.log("Book to be edited: ", bookToBeEditedFromDB)
//       res.render("pages/edit", bookToBeEditedFromDB);
//     })
//     .catch(error => console.log("An error occurred while deleting a book from the database: ", error)); // <--- .catch() - if some error happens handle it here
// });



router.post('/:id/rate', (req, res, next) => {
  const { rating } = req.body;
  const { id } = req.params;
  Product.findByIdAndUpdate(id, {
    // $set: {
    //   [rating]: {
    //     $cond: [{
    //       $in: [id, `$${rating}`]
    //     }, { $setDifference: [`$${rating}`, [id]] },
    //     { $concatArrays: [`$${rating}`, [id]] }
    //     ]
    //   }
    $set: { [rating]: id }
  }, { new: true }).then(responseFromDB => {
    console.log({ responseFromDB });
    // res.redirect('')
  })
})


module.exports = router;




