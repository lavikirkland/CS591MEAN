var express = require('express');
var router = express.Router();

/* GET ps3 page. */
router.get('/', function(req, res, next) {
    console.log('GET check');
    //Pass the object into a Pug template for rendering.
    res.render('ps3', {name: 'Lavi'});
});

/* POST ps3 page. */
router.post('/', function(req, res) {
    console.log('POST check');
    //Get parameters from the request body 
    var str = req.body.name;
    var length = req.body.len;

    //Pass the object into a Pug template for rendering.
    res.render('ps3', {name: str, len: length});
});  
  
module.exports = router;