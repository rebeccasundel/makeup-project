// const { default: axios } = require("axios");
const { default: axios } = require("axios");
const express = require("express");
const router = require("express").Router();
const Post = require('../models/Collection.model');
const ProductModel = require("../models/Product.model");
// router.get("/create", (req, res) => res.render("pages/create"));
// router.get("/warm", (req, res) => res.render("undertone/warm"));
// router.get('/create', (req, res) => {
//     Post.find()
//         .populate("user")
//         .then(responseFromDB => {
//             // console.log(responseFromDB);
//             res.render('pages/create', { posts: responseFromDB });
//         })
//         .catch(err =>
//             console.log(`Err while getting the books from the  DB: ${err}`)
//         );
// });
//post info to database
router.post("/create/:makeId", (req, res, next) => {
    console.log({ params: req.params.makeId })
    // const productInfo = req.body;
    Post
        .create(
            { ...req.body, makeupId: req.params.makeId }
        )
        .then(() => res.redirect(`/collection/create/${req.params.makeId}`))
        .catch((error) => console.log(error));
});
router.get("/create/:makeId", (req, res, next) => {
    Post.find()
        .populate("user")
        .then((responseFromDB) => {
            // axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?id=${req.params.makeId}`).then(product => {
            ProductModel.findById(req.params.makeId).then(product => {
                console.log({ product: product });
                const copyOfPost = responseFromDB.map((favPost) => {
                    if (favPost.makeupId === req.params.makeId) {
                        return { ...favPost._doc, ...product._doc }
                    }
                    // brand: favPost.brand,
                    // name: favPost.name,
                    // products: favPost.products,
                    // description: favPost.description,
                    // makeupId: req.params.makeId,
                    // user: favPost.user.username,
                    // user: req.session.user._id.toString() === favPost.user._id.toString(),
                }).filter(post => post !== undefined);
                // const copyOfPost = responseFromDB.filter(post => post !== undefined)
                console.log({ copyOfPost, makeupId: req.params.makeId });
                res.render("pages/create", { copyOfPost, makeupId: req.params.makeId });
            })
        });
});
// router.post('/create', (req, res) => {
//     // console.log(req.body);
//     const { name, brand, description } = req.body;
//     Post.create({ name, brand, description })
//         // .then(bookFromDB => console.log(`New book created: ${bookFromDB.title}.`))
//         .then(() => res.redirect('/create'))
//         .catch(error => `Error while creating a new book: ${error}`);
// });
// router.get("/create", (req, res) => {
//     // const productInfo = req.body;
//     Post
//         .find({}.limit(10)
//             .then((responseFromDB) => res.render(`pages/create`, { posts: responseFromDB });
// });
module.exports = router;
