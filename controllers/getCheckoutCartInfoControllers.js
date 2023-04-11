const ErrorInfo = require('../classes/general').ErrorInfo;
const ResponseInfo = require('../classes/general').ResponseInfo;
const CheckoutCartInfo = require('../classes/CheckoutCartInfo').CheckoutCartInfo;
const UserDetails = require('../classes/UserDetails').UserDetails;
const UserIdNumberType = require('../classes/UserDetails').UserIdNumberType;
const Product = require('../classes/Product').Product;

module.exports = {

    getCart: function(req, res, next) {

        let response = new ResponseInfo(true, 'test reason')

        // Parameter Check.
        if(req.query != {}){
          // Check MerchantCartToken
          if(req.query.merchantCartToken){
            console.log("MerchantCartToken OK")
          }else{
            let error = new ErrorInfo('100', 'No MerchantCartToken', 'No MerchantCartToken')
            res.send(error)
            return
          }
          
          // Check Country Code
          if(req.query.countryCode){
            console.log("CountryCode OK")
          }else{
            let error = new ErrorInfo('101', 'No CountryCode', 'No CountryCode')
            res.send(error)
            return
          }
      
        }else{
          let error = new ErrorInfo('100', 'No Required Parameters', 'No Required Parameters')
          res.send(error)
          return
        }
        console.log("cart token")
        console.log(cart)
        // Create Response
        let productList = []
        let p1 = new Product("1001", "Super Shoes", "", "Super Shoes ABC", "")
        let p2 = new Product("1002", "Super Shirt", "", "Super Shirt ABC", "")
        productList.push(p1)
        productList.push(p2)
      
        let cartInfo = new CheckoutCartInfo(productList)
        cartInfo.setClientIP("121.121.121.121")
      
        let billingD = new UserDetails
        cartInfo.setbillingDetails(billingD)
      
        res.send(cartInfo);

    }
}