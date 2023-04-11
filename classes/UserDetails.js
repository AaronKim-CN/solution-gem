class UserDetails {
    // Attributes
    UserId = ""
    UserIdNumber = ""
    UserIdNumberType = null // UserIdNumberType Object
    FirstName = ""
    LastName = ""
    FirstNameInLocalCulture = ""
    LastNameInLocalCulture = ""
    MiddleName = ""
    Salutation = ""
    Phone1 = ""
    Phone2 = ""
    Fax = ""
    Email = ""
    Company = ""
    Address1 = ""
    Address2 = ""
    City = ""
    StateOrProvice = ""
    StateCode = ""
    Zip = ""
    CountryCode = ""
    CountryName = ""

    // Setter
    setUserId = function(UserID) {
        this.UserID = UserID
    }
    setUserIdNumber = function(UserIdNumber) {
        this.UserIdNumber = UserIdNumber
    }
    setUserIdNumberType = function(UserIdNumberType) {
        this.UserIdNumberType = UserIdNumberType
    }
    setFirstName = function(FirstName) {
        this.FirstName = FirstName
    }
    setLastName = function(LastName){
        this.LastName = LastName
    }
    setFirstNameInLocalCulture = function(FirstNameInLocalCulture) {
        this.FirstNameInLocalCulture = FirstNameInLocalCulture
    }
    setMiddleName = function(MiddleName) {
        this.MiddleName = MiddleName
    }
    setSalutation = function(Salutation) {
        this.Salutation = Salutation
    }
    setPhone1 = function(Phone1) {
        this.Phone1 = Phone1
    }
    setPhone2 = function(Phone2) {
        this.Phone2 = Phone2
    }
    setFax = function(Fax) {
        this.Fax = Fax
    }
    setEmail = function(Email) {
        this.Email = Email
    }
    setCompany = function(Company) {
        this.Company = Company
    }
    setAddress1 = function(Address1) {
        this.Address1 = Address1
    }
    setAddress2 = function(Address2) {
        this.Address2 = Address2
    }
    setCity = function(City) {
        this.City = City
    }
    setStateOrProvice = function(StateOrProvice) {
        this.StateOrProvice = StateOrProvice
    }
    setStateCode = function(StateCode) {
        this.StateCode = StateCode
    }
    setZip = function(Zip) {
        this.Zip = Zip
    }
    setCountryCode = function(CountryCode) {
        this.CountryCode = CountryCode
    }
    setCountryName = function(CountryName) {
        this.CountryName = CountryName
    }

    // Getter
    // Later
}

class UserIdNumberType {
    // Attributes
    UserIdNumberTypeCode = ""
    Name = ""

    // Setter
    setUserIdNumberTypeCode = function(UserIdNumberTypeCode) {
        this.UserIdNumberTypeCode = UserIdNumberTypeCode
    }
    setName = function(Name) {
        this.Name = Name
    }

    // Getter
    // Later
}

module.exports = {
    UserDetails : UserDetails,
    UserIdNumberType : UserIdNumberType
};