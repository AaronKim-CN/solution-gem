var express = require('express');
var router = express.Router();

const getCheckoutCartInfoControllers = require('../controllers/getCheckoutCartInfoControllers');

router.get('/', getCheckoutCartInfoControllers.getCart)

module.exports = router;