const dynamoose = require("dynamoose");

const productsDB = process.env.TABLE_GEM_PRODUCTS;

const ProductsSchema = new dynamoose.Schema({
    "product_id": String,
    "id": String,
    "title": String,
    "description": String,
    "manufacturer": String,
    "price": Number,
    "image": String
}, {
    "saveUnknown": true,
    "timestamps": true
});

module.exports = dynamoose.model(productsDB, ProductsSchema);