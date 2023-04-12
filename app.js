'use strict';

const express = require('express');
const ejsEngine = require('ejs');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const dynamoose = require("dynamoose");
const helmet = require('helmet');
const path = require('path');
const favicon = require('serve-favicon');
const session = require('express-session');
const app = express();
const config = require('./lib/config.js');

require('dotenv').config()

var indexRouter = require('./routes/index');
var cartRouter = require('./routes/cart');
var checkoutRouter = require('./routes/checkout');
var GetCheckoutCartInfoRouter = require('./routes/GetCheckoutCartInfo');


// Create new DynamoDB instance
const ddb = new dynamoose.aws.ddb.DynamoDB({
    "credentials": {
        "accessKeyId": process.env.AWS_ACCESSKEY,
        "secretAccessKey": process.env.AWS_SECRETKEY
    },
    "region": process.env.REGION
});
// Set DynamoDB instance to the Dynamoose DDB instance
dynamoose.aws.ddb.set(ddb);

const Products = require('./models/Products');
const Cart = require('./lib/Cart');
const Security = require('./lib/Security');


app.disable('x-powered-by');

//app.set('views', __dirname + '/views');
app.engine('ejs', ejsEngine.renderFile);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('env', 'development');

app.locals.paypal = config.paypal;
app.locals.locale = config.locale;

app.use(favicon(path.join(__dirname, 'favicon.png')));
app.use('/public', express.static(path.join(__dirname, '/public'), {
  maxAge: 0,
  dotfiles: 'ignore',
  etag: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(helmet());
//Use the following code for HTTP connection
app.use(helmet({
    contentSecurityPolicy: { directives: cspDefaults }
}));
app.use(session({
    secret: config.secret,
    resave: false,
    saveUninitialized: true,
    unset: 'destroy',
    //store: store,
    name: config.name + '-' + Security.generateId(),
    genid: (req) => {
        return Security.generateId()
    }
}));

app.use('/', indexRouter);
app.use('/cart', cartRouter);
app.use('/checkout', checkoutRouter);
app.use('/GetCheckoutCartInfo', GetCheckoutCartInfoRouter);


if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);
});

app.listen(port);
