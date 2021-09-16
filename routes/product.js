const router = require("express").Router();

/* GET products page */
router.get("/", (req, res, next) => {
  res.render("product");
});

module.exports = router;