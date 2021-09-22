
// const express = require("express");
// const router = express.Router();



// /* GET home page */
// router.get("/", (req, res, next) => {

//   res.render("index");
// });



// module.exports = router;

const router = require("express").Router();

/* GET about us page */
router.get("/", (req, res, next) => {

  res.render('', {});

  res.render('index', {});

module.exports = router;
