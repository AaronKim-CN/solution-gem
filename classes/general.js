class ErrorInfo {
    constructor(Code, Error, Description) {
        this.Code = Code;
        this.Error = Error;
        this.Description = Description;
    }
}

class ResponseInfo {
    constructor(Success, Reason) {
        this.Success = Success;
        this.Reason = Reason;
    }
}

module.exports = {
    ErrorInfo : ErrorInfo,
    ResponseInfo : ResponseInfo
};