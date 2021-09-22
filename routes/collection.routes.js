const router = require("express").Router();
const Collection = require('../models/Collection.model')

/* GET about us page */
router.get("/create", (req, res, next) => {
    res.render('pages/create');
});

router.post('/create', (res, req) => {

})


module.exports = router;
