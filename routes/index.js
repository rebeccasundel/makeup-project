

const router = require("express").Router();

/* GET about us page */
router.get("/", (req, res, next) => {
  res.render('', {});
=======
  res.render('index', {});
>>>>>>> 5de1ee95e570f249378ad5ca351a5aaeb6002423
});

module.exports = router;
