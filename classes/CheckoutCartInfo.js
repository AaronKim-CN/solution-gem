class CheckoutCartInfo {

    // Attributes
    clientIP = ""
    countryCode = ""
    shippingDetails = null // UserDetails Object
    billingDetails = null // UserDetails Object
    userDetails = null // CartUserDetails Object
    includeVAT = 0
    discountsList = [] // Discount Object List
    currencyCode = ""
    originalCurrencyCode = ""
    cultureCode = ""
    shippingOptionsList = [] // ShippingOption Object List
    hubId = 0
    loyaltyPointsEarned = 0
    loyaltyPointsSpent = 0
    loyaltyCode = 0
    vatRegistrationNumber = ""
    doNotChargeVAT = false
    isFreeShipping = false
    freeShippingCouponCode = ""
    paymentInstallments = ""
    urlParameters = [] // KeyValuePair Object List
    otVoucherCode = ""
    otVoucherCurrencyCode = ""
    otVoucherAmount = 0
    rateData = ""
    webStoreCode = ""
    webStoreInstanceCode = ""
    LoyaltyPoints = null // LoyaltyPoints Object
    merchantCartHash = ""
    allowMailsFromMerchant = false
    cartId = ""

    constructor(productsList) 
    {
        this.productsList = productsList;
    }

    // Setter
    setClientIP = function(clientIP) {
        this.clientIP = clientIP
    }
    setcountryCode = function(countryCode) {
        this.countryCode = countryCode
    }
    setshippingDetails = function(shippingDetails) {
        this.shippingDetails = shippingDetails
    }
    setbillingDetails = function(billingDetails) {
        this.billingDetails = billingDetails
    }
    setuserDetails = function(userDetails) {
        this.userDetails = userDetails
    }
    setincludeVAT = function(includeVAT) {
        this.includeVAT = includeVAT
    }
    setdiscountsList = function(discountsList) {
        this.discountsList = discountsList
    }
    setcurrencyCode = function(currencyCode) {
        this.currencyCode = currencyCode
    }
    setoriginalCurrencyCode = function(originalCurrencyCode) {
        this.originalCurrencyCode = originalCurrencyCode
    }
    setcultureCode = function(cultureCode) {
        this.cultureCode = cultureCode
    }
    setshippingOptionsList = function(shippingOptionsList) {
        this.shippingOptionsList = shippingOptionsList
    }
    sethubId = function(hubId) {
        this.hubId = hubId
    }
    setloyaltyPointsEarned = function(loyaltyPointsEarned) {
        this.loyaltyPointsEarned = loyaltyPointsEarned
    }
    setloyaltyPointsSpent = function(loyaltyPointsSpent) {
        this.loyaltyPointsSpent = loyaltyPointsSpent
    }
    setloyaltyCode = function(loyaltyCode) {
        this.loyaltyCode = loyaltyCode
    }
    setvatRegistrationNumber = function(vatRegistrationNumber) {
        this.vatRegistrationNumber = vatRegistrationNumber
    }
    setdoNotChargeVAT = function(doNotChargeVAT) {
        this.doNotChargeVAT = doNotChargeVAT
    }
    setisFreeShipping = function(isFreeShipping) {
        this.isFreeShipping = isFreeShipping
    }
    setfreeShippingCouponCode = function(freeShippingCouponCode){
        this.freeShippingCouponCode = freeShippingCouponCode
    }
    setpaymentInstallments = function(paymentInstallments) {
        this.paymentInstallments = paymentInstallments
    }
    seturlParameters = function(urlParameters) {
        this.urlParameters = urlParameters
    }
    setotVoucherCode = function(otVoucherCode) {
        this.otVoucherCode = otVoucherCode
    }
    setotVoucherCurrencyCode = function(otVoucherCurrencyCode) {
        this.otVoucherCurrencyCode = otVoucherCurrencyCode
    }
    setotVoucherAmount = function(otVoucherAmount) {
        this.otVoucherAmount = otVoucherAmount
    }
    setrateData = function(rateData) {
        this.rateData = rateData
    }
    setwebStoreCode = function(webStoreCode) {
        this.webStoreCode = webStoreCode
    }
    setwebStoreInstanceCode = function(webStoreInstanceCode) {
        this.webStoreInstanceCode = webStoreInstanceCode
    }
    setLoyaltyPoints = function(LoyaltyPoints) {
        this.LoyaltyPoints = LoyaltyPoints
    }
    setmerchantCartHash = function(merchantCartHash) {
        this.merchantCartHash = merchantCartHash
    }
    setallowMailsFromMerchant = function(allowMailsFromMerchant) {
        this.allowMailsFromMerchant = allowMailsFromMerchant
    }
    setcartId = function(cartId) {
        this.cartId = cartId
    }
    
    // Getter
    getClientIP = function() {
        return this.clientIP
    }

}

module.exports = {
    CheckoutCartInfo : CheckoutCartInfo
};