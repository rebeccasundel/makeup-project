const router = require("express").Router();



/* GET home page */
// router.get("/user/profile", isLoggedIn, (req, res, next) => {
//   console.log(user);
//   res.render("auth/profile", user);
// });

// module.exports = router;
router.get("/profile", (req, res, next) => {
  // console.log(req.session)
  res.render("auth/profile");
});


// router.post("/profile/:id", (req, res, next) => {
//   console.log(req.session)
//     .then(req.session=> {
//     res.render("auth/profile");
//   })
//   .catch (error => console.log("An error occurred while getting a product from database: ", error)); // <--- .catch() - if some error happens handle it here
// })

// });



module.exports = router;