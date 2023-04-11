const express = require('express')
var router = express.Router();
const Security = require('../lib/Security');

const Products = require('../models/Products');

module.exports = {

    getProducts: function(req, res, next){

        if(!req.session.cart) {
            console.log(req.session.cart)
            req.session.cart = {
                items: [],
                totals: 0.00,
                formattedTotals: ''
            };
        }

        Products.scan().exec((error, products) => {
            if (error) {
                console.error(error);
            } else {
                
                var formatedProducts = []
                // let format = new Intl.NumberFormat(req.app.locals.locale.lang, {style: 'currency', currency: req.app.locals.locale.currency });
                products.forEach( (product) => {
    
                    var formatedProduct = {}
                    formatedProduct['manufacturer'] = product.manufacturer
                    formatedProduct['image'] = product.image
                    formatedProduct['price'] = product.price
                    formatedProduct['description'] = product.description
                    formatedProduct['id'] = product.id
                    formatedProduct['product_id'] = product.product_id
                    formatedProduct['title'] = product.title
    
                    formatedProducts.push(formatedProduct)
                });
                res.render('index', {
                    pageTitle: 'Node.js Shopping Cart',
                    products: formatedProducts,
                    nonce: Security.md5(req.sessionID + req.headers['user-agent'])
                })
               
            }
        })
    }
}