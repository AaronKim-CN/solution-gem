var express = require('express');
var router = express.Router();

const sendOrderToMerchantControllers = require('../controllers/sendOrderToMerchantControllers');

router.post('/', sendOrderToMerchantControllers.sendOrder)

module.exports = router;