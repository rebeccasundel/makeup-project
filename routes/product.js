const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("product");
});

module.exports = router;