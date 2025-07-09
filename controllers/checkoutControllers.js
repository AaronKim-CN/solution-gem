
const Security = require('../lib/Security');
const Cart = require('../lib/Cart');

const Products = require('../models/Products');

module.exports = {

    getCheckout: function(req, res, next) {
        let sess = req.session;
        let token = req.cookies?.GlobalE_Cart_Token;
        let cart = Cart.getCart(token);

        res.render('checkout', {
            pageTitle: 'Checkout',
            cart: cart,
            checkoutDone: false,
            nonce: Security.md5(req.sessionID + req.headers['user-agent'])
        });
    },
    postCheckout: function(req, res, next) {

        let sess = req.session;
        let token = req.cookies?.GlobalE_Cart_Token;
        let cart = Cart.getCart(token);
        
        if(Security.isValidNonce(req.body.nonce, req)) {
            res.render('checkout', {
                pageTitle: 'Checkout',
                cart: cart,
                checkoutDone: true
            });
        } else {
            res.redirect('/');
        }
    }
}