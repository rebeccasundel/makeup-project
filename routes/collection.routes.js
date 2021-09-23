
// const { default: axios } = require("axios");
const express = require("express");
const router = require("express").Router();

const Post = require('../models/Collection.model')




router.get("/create", (req, res) => res.render("pages/create"));

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
router.post("/create", (req, res, next) => {
    // const productInfo = req.body;
    Post

        .create(
            req.body
        )
        .then(() => res.redirect(`/collection/create`))
        .catch((error) => console.log(error));
});


router.get("/create", (req, res, next) => {
    Post.find()
        .populate("user")
        .then((responseFromDB) => {
            const copyOfPost = responseFromDB.map((favPost) => ({
                brand: favPost.brand,
                name: favPost.name,
                products: favPost.products,
                description: favPost.description,
                user: room.user.username,
                user: req.session.user._id.toString() === favPost.user._id.toString(),
            }));
            res.render("pages/create", copyOfPost);
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
