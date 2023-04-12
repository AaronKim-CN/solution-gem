const express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    res.render('internationalcheckout', {
        pageTitle: 'GlobalE Checkout'
    });

});

module.exports = router;