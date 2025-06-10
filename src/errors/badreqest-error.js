const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base-error");


class BadRequestError extends BaseError {
    constructor(propertyName,details){
        super("BadRequest",StatusCodes.BAD_REQUEST,`Invalid Structure for ${propertyName} Provided`,details)
        this.propertyName = propertyName
    }
}

module.exports = BadRequestError