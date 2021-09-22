const router = require("express").Router();

/* GET home page */
router.get("/profile", (req, res, next) => {
  console.log(req.session)
  res.render("index");
});

module.exports = router;