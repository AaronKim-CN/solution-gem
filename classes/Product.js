class Product {

    // Required Attributes
    constructor(
        ProductCode,
        Name,
        NameEnglish,
        Description,
        DescriptionEnglish) 
    {
        this.ProductCode = ProductCode;
        this.Name = Name;
        this.NameEnglish = NameEnglish;
        this.Description = Description;
        this.DescriptionEnglish = DescriptionEnglish;
    }

    // Attributes
    ProductGroupCode = ""
    ProductCodeSecondary = ""
    ProductGroupCodeSecondary = ""
    CartItemId = ""
    ParentCartItemId = ""
    CartItemOptionId = ""
    Keywords = ""
    URL = ""
    GiftMessage = ""
    GenericHSCode = ""
    OriginCountryCode = ""
    Weight = 0
    NetWeight = 0
    Height = 0
    Width = 0
    Length = 0
    Volume = 0
    NetVolume = 0
    ImageURL = ""
    ImageHeight = 0
    ImageWidth = 0
    ListPrice = 0
    OriginalListPrice = 0
    SalePrice = 0
    SalePriceBeforeRounding = 0
    LineItemSalePrice = 0
    OriginalSalePrice = 0
    LineItemOriginalSalePrice = 0
    SalePriceReason = ""
    IsFixedPrice = false
    OrderedQuantity = 0
    DeliveryQuantity = 0
    IsBundle = false
    IsVirtual = false
    IsBlockedForGlobalE = false
    HandlingCode = ""
    VATRateType = null // VATRateType Object
    LocalVATRateType = null // VATRateType Object
    VATCategory = null // VATCategory Object
    Brand = null // Brand Object
    Categories = [] // List of Category Object
    Attributes = [] // List of Attribute Object
    AttributesEnglish = [] // List of AttributesEnglish Object
    IsBackOrdered = false
    BackOrderDate = ""
    ProductClassCode = ""
    PriceCoefficientRate = 0
    MetaData = null // ProductMetaData Object

    // Setter
    setProductGroupCode = function(ProductGroupCode) {
        this.ProductGroupCode = ProductGroupCode
    }
    setProductCodeSecondary = function(ProductCodeSecondary) {
        this.ProductCodeSecondary = ProductCodeSecondary
    }
    setProductGroupCodeSecondary = function(ProductGroupCodeSecondary) {
        this.ProductGroupCodeSecondary = ProductGroupCodeSecondary
    }
    setCartItemId = function(CartItemId) {
        this.CartItemId = CartItemId
    }
    setParentCartItemId = function(ParentCartItemId) {
        this.ParentCartItemId = ParentCartItemId
    }
    setCartItemOptionId = function(CartItemOptionId) {
        this.CartItemOptionId = CartItemOptionId
    }
    setKeywords = function(Keywords) {
        this.Keywords = Keywords
    }
    setURL = function(URL) {
        this.URL = URL
    }
    setGiftMessage = function(GiftMessage) {
        this.GiftMessage = GiftMessage
    }
    setGenericHSCode = function(GenericHSCode) {
        this.GenericHSCode = GenericHSCode
    }
    setOriginCountryCode = function(OriginCountryCode) {
        this.OriginCountryCode = OriginCountryCode
    }
    setWeight = function(Weight) {
        this.Weight = Weight
    }
    setNetWeight = function(NetWeight) {
        this.NetWeight = NetWeight
    }
    setHeight = function(Height) {
        this.Height = Height
    }
    setWidth = function(Width) {
        this.Width = Width
    }
    setLength = function(Length) {
        this.Length = Length
    }
    setVolume = function(Volume) {
        this.Volume = Volume
    }
    setNetVolume = function(NetVolume) {
        this.NetVolume = NetVolume
    }
    setImageURL = function(ImageURL) {
        this.ImageURL = ImageURL
    }
    setImageHeight = function(ImageHeight) {
        this.ImageHeight = ImageHeight
    }
    setImageWidth = function(ImageWidth) {
        this.ImageWidth = ImageWidth
    }
    setListPrice = function(ListPrice) {
        this.ListPrice = ListPrice
    }
    setOriginalListPrice = function(OriginalListPrice) {
        this.OriginalListPrice = OriginalListPrice
    }
    setLineItemOriginalSalePrice = function(LineItemOriginalSalePrice) {
        this.LineItemOriginalSalePrice = LineItemOriginalSalePrice
    }
    setSalePriceReason = function(SalePriceReason) {
        this.SalePriceReason = SalePriceReason
    }
    setIsFixedPrice = function(IsFixedPrice) {
        this.IsFixedPrice = IsFixedPrice
    }
    setOrderedQuantity = function(OrderedQuantity) {
        this.OrderedQuantity = OrderedQuantity
    }
    setDeliveryQuantity = function(DeliveryQuantity) {
        this.DeliveryQuantity = DeliveryQuantity
    }
    setIsBundle = function(IsBundle) {
        this.IsBundle = IsBundle
    }
    setIsVirtual = function(IsVirtual) {
        this.IsVirtual = IsVirtual
    }
    setIsBlockedForGlobalE = function(IsBlockedForGlobalE) {
        this.IsBlockedForGlobalE = IsBlockedForGlobalE
    }
    setHandlingCode = function(HandlingCode) {
        this.HandlingCode = HandlingCode
    }
    setVATRateType = function(VATRateType) {
        this.VATRateType = VATRateType
    }
    setBrand = function(Brand) {
        this.Brand = Brand
    }
    setCategories = function(Categories) {
        this.Categories = Categories
    }
    setAttributes = function(Attributes) {
        this.Attributes = Attributes
    }
    setAttributesEnglish = function(AttributesEnglish) {
        this.AttributesEnglish = AttributesEnglish
    }
    setIsBackOrdered = function(IsBackOrdered) {
        this.IsBackOrdered = IsBackOrdered
    }
    setBackOrderDate = function(BackOrderDate) {
        this.BackOrderDate = BackOrderDate
    }
    setProductClassCode = function(ProductClassCode) {
        this.ProductClassCode = ProductClassCode
    }
    setPriceCoefficientRate = function(PriceCoefficientRate) {
        this.PriceCoefficientRate = PriceCoefficientRate
    }  
    setMetaData = function(MetaData) {
        this.MetaData = MetaData
    }      
}

module.exports = {
    Product : Product
};