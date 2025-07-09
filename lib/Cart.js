'use strict';

const config = require('./config');


class Cart {

    static carts = new Map();

    // Create a new cart with token
    static createCart(token) {
        if (!this.carts.has(token)) {
            this.carts.set(token, {
                token,
                items: [],
                totals: 0.00,
                formattedTotals: ''
            });
        }
        return this.carts.get(token);
    }

    // Get cart by token
    static getCart(token) {
        return this.carts.get(token);
    }    

    static addToCart(product = null, qty = 1, token) {

        const cart = this.getCart(token) || this.createCart(token);

        if(!this.inCart(product.product_id, token)) {
            
            let format = new Intl.NumberFormat(config.locale.lang, {style: 'currency', currency: config.locale.currency });
            let prod = {
              id: product.product_id,
              title: product.title,
              price: product.price,
              qty: qty,
              image: product.image,
              formattedPrice: format.format(product.price)
            };

            cart.items.push(prod);

            this.calculateTotals(token);
        }
    }

    static removeFromCart(id = 0, token) {
        const cart = this.getCart(token);
        if (!cart) return;

        for(let i = 0; i < cart.items.length; i++) {
            let item = cart.items[i];
            if(item.id === id) {
                cart.items.splice(i, 1);
                this.calculateTotals(token);
                break;
            }
        }

    }

    static updateCart(ids = [], qtys = [], token) {
        const cart = this.getCart(token);
        if (!cart) return;

        let map = [];
        let updated = false;

        ids.forEach(id => {
           qtys.forEach(qty => {
              map.push({
                  id: parseInt(id, 10),
                  qty: parseInt(qty, 10)
              });
           });
        });
        map.forEach(obj => {
            cart.items.forEach(item => {
               if(item.id === obj.id) {
                   if(obj.qty > 0 && obj.qty !== item.qty) {
                       item.qty = obj.qty;
                       updated = true;
                   }
               }
            });
        });
        if(updated) {
            this.calculateTotals(token);
        }
    }

    static inCart(productID = 0, token) {
        const cart = this.getCart(token);
        if (!cart) return false;

        let found = false;
        cart.items.forEach(item => {
           if(item.id === productID) {
               found = true;
           }
        });
        return found;
    }

    static calculateTotals(token) {
        const cart = this.getCart(token);
        if (!cart) return;

        cart.totals = 0.00;
        cart.items.forEach(item => {
            let price = item.price;
            let qty = item.qty;
            let amount = price * qty;

            cart.totals += amount;
        });

        this.setFormattedTotals(token);

    }

    static emptyCart(token) {
        const cart = this.getCart(token);
        if (cart) {
            cart.items = [];
            cart.totals = 0.00;
            cart.formattedTotals = '';
        }
    }

    static setFormattedTotals(token) {
        const cart = this.getCart(token);
        if (!cart) return;

        let format = new Intl.NumberFormat(config.locale.lang, {
            style: 'currency',
            currency: config.locale.currency
        });

        cart.formattedTotals = format.format(cart.totals);
        console.log(cart)
    }

}

module.exports = Cart;