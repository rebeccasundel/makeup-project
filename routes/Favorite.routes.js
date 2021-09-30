const { response } = require("express");
const express = require("express");

const router = require("express").Router();
const Product = require('../models/Product.model')
const Favorite = require('../models/Favorite.model')


router.get('/favorite-product/:id', (req, res, next) => {


    Favorite.find({})
        .save()
        .then((favFromDB) => {


            res.render("undertone/warm", favFromDB);
        })
        .catch(error => console.log("An error occurred while deleting a book from the database: ", error)); // <--- .catch() - if some error happens handle it here
});


module.exports = router;