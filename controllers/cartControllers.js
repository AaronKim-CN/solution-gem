const express = require('express')
var router = express.Router();
const Security = require('../lib/Security');
const Cart = require('../lib/Cart');

const Products = require('../models/Products');

module.exports = {
    
    getCart: function(req, res, next) {
        let sess = req.session;
        let token = req.cookies?.GlobalE_Cart_Token;
        let cart = Cart.getCart(token);

        // Set Cart Token
//        res.cookie('GlobalE_Cart_Token', "1234567890")

        res.render('cart', {
            pageTitle: 'Cart',
            cart: cart,
            nonce: Security.md5(req.sessionID + req.headers['user-agent'])
        });
    },
    addCart: function(req, res, next) {

        let qty = parseInt(req.body.qty, 10);
        let product = req.body.product_id;

        if(qty > 0 && Security.isValidNonce(req.body.nonce, req)) {

            Products.scan("product_id").contains(product).exec((error, prod) => {
    
                var formatedProduct = {}

                prod.forEach( (p) => {
    
                    formatedProduct['manufacturer'] = p.manufacturer
                    formatedProduct['image'] = p.image
                    formatedProduct['price'] = p.price
                    formatedProduct['description'] = p.description
                    formatedProduct['id'] = p.id
                    formatedProduct['product_id'] = p.product_id
                    formatedProduct['title'] = p.title
    
                });
    
                //let cart = (req.session.cart) ? req.session.cart : null;
                let token = req.cookies?.GlobalE_Cart_Token;

                Cart.addToCart(formatedProduct, qty, token);
                res.redirect('/cart');
            })
    
        } else {
            
            res.redirect('/');
        }
    },
    removeById: function(req, res, next) {

        let id = req.params.id;

        if(/^\d+$/.test(id) && Security.isValidNonce(req.params.nonce, req)) {
            Cart.removeFromCart(parseInt(id, 10), req.session.cart);
            res.redirect('/cart');
        } else {
            res.redirect('/');
        }
    },
    emptyCart: function(req, res, next) {

        if(Security.isValidNonce(req.params.nonce, req)) {
            let token = req.cookies?.GlobalE_Cart_Token;
            Cart.emptyCart(token);
            res.redirect('/cart');
        } else {
            res.redirect('/');
        }
    },
    updateCart: function(req, res, next) {
        let ids = req.body["product_id[]"];
        let qtys = req.body["qty[]"];
        
        if(Security.isValidNonce(req.body.nonce, req)) {
            let cart = (req.session.cart) ? req.session.cart : null;
            let i = (!Array.isArray(ids)) ? [ids] : ids;
            let q = (!Array.isArray(qtys)) ? [qtys] : qtys;
            Cart.updateCart(i, q, cart);
            res.redirect('/cart');
        } else {
            res.redirect('/');
        }
    }
}