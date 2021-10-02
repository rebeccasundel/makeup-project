


const router = require("express").Router();
const axios = require("axios");
// const { create } = require("../models/Collection.model");

const ObjectId = require('mongodb').ObjectId;
const Post = require('../models/Collection.model');
const ProductModel = require("../models/Product.model");
const multer = require('multer');
const cloudinary = require("../config/cloudinary.config");

const upload = multer({ dest: './public/uploads/' });

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


router.get('/upload/', (req, res, next) => {
    res.render("pages/create-form")
})

router.post('/upload/', cloudinary("Makeup-Collection").single("photo"), (req, res) => {
    console.log("file object", req.file);
    res.render("pages/create", req.file)



});

router.get("/create/", isLoggedIn, (req, res, next) => {
    Post.find()
        .then((responseFromDB) => {

            const cop = responseFromDB.map((favPost) => ({
                brand: favPost.brand,
                name: favPost.name,
                name2: favPost.name2,
                name3: favPost.name3,
                collectionName: favPost.collectionName,
                products: favPost.products,
                description: favPost.description,
                _id: favPost._id,
                top3: favPost.top3,
                imageUrl: favPost.imageUrl,
                collectionName: favPost.collectionName,
                undertone: favPost.undertone,
                // img: favPost.img,
                // cloudinary_id: favPost.cloudinary_id,
                // user: favPost.user.username,
            }))

            res.render("pages/create", { cop });
        })
<<<<<<< HEAD
})
=======
=======
// const cop = responseFromDB.map((favPost) => ({
//     brand: favPost.brand,
//     name: favPost.name,
//     products: favPost.products,
//     description: favPost.description,
//     _id: favPost._id,
//     top3: favPost.top3,
//     imageUrl: favPost.imageUrl,
//     collectionName: favPost.collectionName,
//     undertone: favPost.undertone,
//     makeupId: req.params.makeId,
//     // user: favPost.user.username,
// }))

// res.render("pages/create", { cop });

// Route to upload from project base path
const upload = multer({ dest: './public/uploads/' });
>>>>>>> 319eb8dd57a13ed224eb190fd7e043ebe0dcdcf1




<<<<<<< HEAD
router.post("/create/", (req, res, next) => {

    // const productInfo = req.body;
    // Post

    //     .create(

    const { name, name2, name3, description, collectionName, brand, undertone } = req.body;
    Post.create({ name, name2, name3, description, collectionName, brand, undertone })
        .then(newSavedProduct => {
            // console.log("is this a new book: ", newSavedBook);
            res.redirect("/collection/create/"); // 🏃‍♀️ 🏃‍♀️ 🏃‍♀️ GO TO LIST OF ALL BOOKS PAGE TO SEE YOUR NEW BOOK THERE
        })
        .catch(error => console.log("An error occurred while saving a book to the database: ", error)); // <--- .catch() - if some error happens handle it here

});

=======
router.get('/upload/', (req, res, next) => {
    res.render("pages/create-form")

})

router.post('/upload/', cloudinary("Makeup-Collection").single("photo"), (req, res) => {
    console.log("file object", req.file);
    res.render("pages/create", req.file)
    // const picture = new Picture({
    //     name: req.body.name,
    //     path: `/uploads/${req.file.filename}`,
    //     originalName: req.file.originalname
    // });

    // picture
    //     .save()
    // Post
    //     .then(() => {
    //         res.redirect('/collection/create');
    //     })
    //     .catch(err => {
    //         next(error);
    //     });



router.post("/create/", (req, res, next) => {

    // const productInfo = req.body;
    // Post

    //     .create(

    const { name, name2, name3, description, collectionName, brand, undertone } = req.body;
    Post.create({ name, name2, name3, description, collectionName, brand, undertone })
        .then(newSavedProduct => {
            // console.log("is this a new book: ", newSavedBook);
            res.redirect("/collection/create/"); // 🏃‍♀️ 🏃‍♀️ 🏃‍♀️ GO TO LIST OF ALL BOOKS PAGE TO SEE YOUR NEW BOOK THERE
        })
        .catch(error => console.log("An error occurred while saving a book to the database: ", error)); // <--- .catch() - if some error happens handle it here

});

>>>>>>> 319eb8dd57a13ed224eb190fd7e043ebe0dcdcf1
// )
//         .then(() => res.redirect(`/collection/create/`))
//         .catch((error) => console.log(error));
// });




<<<<<<< HEAD
=======

>>>>>>> 319eb8dd57a13ed224eb190fd7e043ebe0dcdcf1




});


<<<<<<< HEAD
=======

// router.get('/collection/create/', (req, res, next) => {
//     Picture.find()
//         .then(pictures => res.render('index', { pictures })
//             .catch(error => next(error)));
// });
>>>>>>> 319eb8dd57a13ed224eb190fd7e043ebe0dcdcf1


//     })
//     .catch(error => next(error));

//     })
//     .catch(error => next(error));

//delete

<<<<<<< HEAD
router.post('/create/delete/:id', (req, res, next) => {
    // const { id } = req.params;
    // console.log('The ID from the URL is: ', id);
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/collection/create/'))
        .catch(error => next(error));

});

=======
//delete


router.post('/create/delete/:id', (req, res, next) => {
    // const { id } = req.params;
    // console.log('The ID from the URL is: ', id);
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/collection/create/'))
        .catch(error => next(error));

});
>>>>>>> 319eb8dd57a13ed224eb190fd7e043ebe0dcdcf1

//edit

<<<<<<< HEAD
=======
//edit

>>>>>>> 319eb8dd57a13ed224eb190fd7e043ebe0dcdcf1
router.get('/create/edit/:id', isLoggedIn, (req, res, next) => {



    Post.findById(req.params.id)
        .then((postToBeEditiedFromDB) => {  // bookToBeEditedFromDB - placeholder

            // console.log("Book to be edited: ", bookToBeEditedFromDB)
            res.render("pages/edit", postToBeEditiedFromDB);
        })
        .catch(error => console.log("An error occurred while deleting a book from the database: ", error)); // <--- .catch() - if some error happens handle it here
});




router.post("/create/edit/:id", (req, res, next) => {



    const {
        brand,
        name,
        products,
        description,
        top3,
        collectionName,
        undertone,

    } = req.body;

    Post.findByIdAndUpdate(req.params.id, {
        brand,
        name,
        products,
        description,
        top3,
        collectionName,
        undertone,
    }, { new: true })
        .then(updatePostFromDB => {
<<<<<<< HEAD



            res.redirect(`/collection/create/`)

        })
        .catch(error => console.log("An error occurred while updating a product in the database: ", error)); // <--- .catch() - if some error happens handle it here
});


router.get("/create/:id", (req, res, next) => {
=======



            res.redirect(`/collection/create/`)

        })
        .catch(error => console.log("An error occurred while updating a product in the database: ", error)); // <--- .catch() - if some error happens handle it here
});


router.get("/create/:id", (req, res, next) => {



>>>>>>> 319eb8dd57a13ed224eb190fd7e043ebe0dcdcf1

    Post.findById(req.params.id)
        .then(postFromDB => {


<<<<<<< HEAD
=======
            res.render("pages/edit", postFromDB);
        })
        .catch(error => console.log("An error occurred while getting a product from database: ", error)); // <--- .catch() - if some error happens handle it here
})
>>>>>>> 319eb8dd57a13ed224eb190fd7e043ebe0dcdcf1

    Post.findById(req.params.id)
        .then(postFromDB => {


            res.render("pages/edit", postFromDB);
        })
        .catch(error => console.log("An error occurred while getting a product from database: ", error)); // <--- .catch() - if some error happens handle it here
})



<<<<<<< HEAD
=======
router.get("/create/", (req, res, next) => {
    Post.find()
        .then((responseFromDB) => {
>>>>>>> 319eb8dd57a13ed224eb190fd7e043ebe0dcdcf1

            const cop = responseFromDB.map((favPost) => ({
                brand: favPost.brand,
                name: favPost.name,
                products: favPost.products,
                description: favPost.description,
                _id: favPost._id,
                top3: favPost.top3,
                imageUrl: favPost.imageUrl,
                collectionName: favPost.collectionName,
                undertone: favPost.undertone,
                cloudinary_id: favPost.cloudinary_id,
                // user: favPost.user.username,
            }))

<<<<<<< HEAD
=======
            res.render("pages/create", { cop });

            const {
                brand,
                name,
                products,
                description,
                top3,
                collectionName,
                undertone,
                makeupId,
            } = req.body;

            Post.findByIdAndUpdate(req.params.postId, {
                brand,
                name,
                products,
                description,
                top3,
                collectionName,
                undertone,
                makeupId,
            }, { new: true })
                .then(updatedPostFromDB => { // updatedBookFromDB - placeholder
                    // console.log("is this updated >>>>> ", updatedBookFromDB);







                    router.post("/create", (req, res, next) => {

                        // const productInfo = req.body;
                        Post

                            .create(
                                req.body
                            )
                            .then(() => res.redirect(`/collection/create/`))
                            .catch((error) => console.log(error));
                    });

                    //     })
                    //     .catch(error => next(error));


                    //delete

                    router.post('/create/delete/:id', (req, res, next) => {
                        // const { id } = req.params;
                        // console.log('The ID from the URL is: ', id);
                        Post.findByIdAndDelete(req.params.id)
                            .then(() => res.redirect('/collection/create/'))
                            .catch(error => next(error));

                    });


                    //edit

                    router.get('/create/edit/:id', (req, res, next) => {



                        Post.findById(req.params.id)
                            .then((postToBeEditiedFromDB) => {  // bookToBeEditedFromDB - placeholder

                                // console.log("Book to be edited: ", bookToBeEditedFromDB)
                                res.render("pages/edit", postToBeEditiedFromDB);
                            })
                            .catch(error => console.log("An error occurred while deleting a book from the database: ", error)); // <--- .catch() - if some error happens handle it here
                    });




                    router.post("/create/edit/:id", (req, res, next) => {

                        // console.log("is this UPDATED book: ", req.body);

                        const {
                            brand,
                            name,
                            products,
                            description,
                            top3,
                            collectionName,
                            undertone,

                        } = req.body;

                        Post.findByIdAndUpdate(req.params.id, {
                            brand,
                            name,
                            products,
                            description,
                            top3,
                            collectionName,
                            undertone,
                        }, { new: true })
                            .then(updatePostFromDB => { // updatedBookFromDB - placeholder


                                // res.redirect(`/create/${req.params.id}`); // 🏃‍♀️ 🏃‍♀️ 🏃‍♀️ GO TO DETAILS PAGE TO SEE THE UPDATED BOOK
                                res.redirect(`/collection/create/`)

                            })
                            .catch(error => console.log("An error occurred while updating a book in the database: ", error)); // <--- .catch() - if some error happens handle it here
                    });


                    router.get("/create/:id", (req, res, next) => {

                        // console.log(req.params.bookId);

                        // .findById() - always returns an object
                        Post.findById(req.params.id)
                            .then(postFromDB => { // bookFromDB - placeholder
                                // console.log("A book is: ", bookFromDB);

                                res.render("pages/edit", postFromDB);
                            })
                            .catch(error => console.log("An error occurred while getting a book from database: ", error)); // <--- .catch() - if some error happens handle it here
                    })


                });
        });
});

>>>>>>> 319eb8dd57a13ed224eb190fd7e043ebe0dcdcf1
module.exports = router;
