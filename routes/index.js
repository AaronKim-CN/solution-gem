const express = require('express');
var router = express.Router();

var IndexController = require('../controllers/indexControllers');

/* GET home page. */
router.get('/', IndexController.getProducts);
  
module.exports = router;