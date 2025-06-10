const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base-error");


class NotImplementedError extends BaseError {
    constructor(details=null){
        super("NotImplementedError",StatusCodes.NOT_IMPLEMENTED,`This Feature is not Implemented ye`,details)
    }
}

module.exports = NotImplementedError