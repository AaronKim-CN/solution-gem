// middleware/cartToken.js
'use strict';

const { v4: uuidv4 } = require('uuid');
const Cart = require('./Cart');

const cartTokenMiddleware = (req, res, next) => {
  let token = req.cookies?.GlobalE_Cart_Token;

  // If no token, generate a new one and set cookie
  if (!token) {
    token = uuidv4();
    res.cookie('GlobalE_Cart_Token', token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    });
  }
  console.log(token)
  // Ensure the cart exists
  Cart.createCart(token);

  // Attach token and cart to request
  req.cartToken = token;
  req.cart = Cart.getCart(token);

  next();
};

module.exports = cartTokenMiddleware;