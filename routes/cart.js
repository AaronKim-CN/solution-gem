const express = require('express');
var router = express.Router();

var CartController = require('../controllers/cartControllers');

/* GET Cart. */
router.get('/', CartController.getCart);
router.post('/', CartController.addCart);
router.get('/remove/:id/:nonce', CartController.removeById);
router.get('/empty/:nonce', CartController.emptyCart);
router.post('/update', CartController.updateCart);

module.exports = router;