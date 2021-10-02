// module.exports = router;
const { response } = require("express");
const express = require("express");

const router = require("express").Router();
const Product = require('../models/Product.model')


/* GET products page */
router.get("/", (req, res, next) => {
<<<<<<< HEAD
  Product.find({}).lean().limit(30).then((responseFromDB) => {
=======

  Product.find({}).lean().limit(30).then((responseFromDB) => {

  Product.find({}).lean().limit(20).then((responseFromDB) => {

>>>>>>> 319eb8dd57a13ed224eb190fd7e043ebe0dcdcf1
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



// router.post("/", (req, res, next) => {
//   Product.create.then((responseFromDB) => {

<<<<<<< HEAD
=======

>>>>>>> 319eb8dd57a13ed224eb190fd7e043ebe0dcdcf1
//     res.render("pages/list", { products: responseFromDB });
//   })
// });

// router.post('/:id/rate', (req, res, next) => {
//   const { rating } = req.body;
//   const { id } = req.params;
//   Product.findByIdAndUpdate(id, {
//     // $set: {
//     //   [rating]: {
//     //     $cond: [{
//     //       $in: [id, `$${rating}`]
//     //     }, { $setDifference: [`$${rating}`, [id]] },
//     //     { $concatArrays: [`$${rating}`, [id]] }
//     //     ]
//     //   }
//     $set: { [rating]: id }
//   }, { new: true }).then(responseFromDB => {
//     console.log({ responseFromDB });
//     // res.redirect('')
//   })
// })



// router.get("/favorite-product/", (req, res, next) => {
//   Product.findbyId()
//     .then((responseFromDB) => {
//       console.log({ responseFromDB })

//       // responseFromDB.forEach(product => {
//       //   product.warm = product.warm?.length || 0;
//       //   product.cool = product.cool?.length || 0;
//       //   product.neutral = product.neutral?.length || 0;
//       // })
//       // console.log({ responseFromDB })
//       res.render("pages/warm", { products: responseFromDB });
//     });
// });

<<<<<<< HEAD
=======

>>>>>>> 319eb8dd57a13ed224eb190fd7e043ebe0dcdcf1
router.get('/favorite-product/:id', (req, res, next) => {


  Product.findById(req.params.id)
    .then((productFromDB) => {


      res.render("undertone/warm", productFromDB);
    })
    .catch(error => console.log("An error occurred while deleting a book from the database: ", error)); // <--- .catch() - if some error happens handle it here
});




// router.get('/favorite-product/edit/:id', (req, res, next) => {


//   Product.findById(req.params.id)
//     .then((postToBeEditiedFromDB) => {  // bookToBeEditedFromDB - placeholder

//       // console.log("Book to be edited: ", bookToBeEditedFromDB)
//       res.render("undertone/warm", postToBeEditiedFromDB);
//     })
//     .catch(error => console.log("An error occurred while deleting a book from the database: ", error)); // <--- .catch() - if some error happens handle it here
// });



router.post('/product/favorite-product/delete/:id', (req, res, next) => {
  // const { id } = req.params;
  // console.log('The ID from the URL is: ', id);
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/product/favorite-product/:id'))
    .catch(error => next(error));

});
<<<<<<< HEAD



=======




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



// router.get("/favorite-product/", (req, res, next) => {
//   Product.findbyId()
//     .then((responseFromDB) => {
//       console.log({ responseFromDB })

//       // responseFromDB.forEach(product => {
//       //   product.warm = product.warm?.length || 0;
//       //   product.cool = product.cool?.length || 0;
//       //   product.neutral = product.neutral?.length || 0;
//       // })
//       // console.log({ responseFromDB })
//       res.render("pages/warm", { products: responseFromDB });
//     });
// });

router.get('/favorite-product/:id', (req, res, next) => {


  Product.findById(req.params.id)
    .then((productFromDB) => {


      res.render("undertone/warm", productFromDB);
    })
    .catch(error => console.log("An error occurred while deleting a book from the database: ", error)); // <--- .catch() - if some error happens handle it here
});




// router.get('/favorite-product/edit/:id', (req, res, next) => {


//   Product.findById(req.params.id)
//     .then((postToBeEditiedFromDB) => {  // bookToBeEditedFromDB - placeholder

//       // console.log("Book to be edited: ", bookToBeEditedFromDB)
//       res.render("undertone/warm", postToBeEditiedFromDB);
//     })
//     .catch(error => console.log("An error occurred while deleting a book from the database: ", error)); // <--- .catch() - if some error happens handle it here
// });



router.post('/product/favorite-product/delete/:id', (req, res, next) => {
  // const { id } = req.params;
  // console.log('The ID from the URL is: ', id);
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/product/favorite-product/:id'))
    .catch(error => next(error));

});




>>>>>>> 319eb8dd57a13ed224eb190fd7e043ebe0dcdcf1
module.exports = router;



