var express = require('express');
var router = express.Router();

const UpdateOrderStatusControllers = require('../controllers/UpdateOrderStatusControllers');

router.post('/', UpdateOrderStatusControllers.updateStatus)

module.exports = router;