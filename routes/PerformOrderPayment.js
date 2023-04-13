var express = require('express');
var router = express.Router();

const PerformOrderPaymentControllers = require('../controllers/PerformOrderPaymentControllers');

router.post('/', PerformOrderPaymentControllers.sendPayment)

module.exports = router;