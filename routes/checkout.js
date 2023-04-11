const express = require('express');
const checkoutControllers = require('../controllers/checkoutControllers');
var router = express.Router();

router.get('/', checkoutControllers.getCheckout);
router.post('/', checkoutControllers.postCheckout);

module.exports = router;