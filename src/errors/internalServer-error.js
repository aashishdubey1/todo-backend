const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base-error");


class InternalServerError extends BaseError {
    constructor(details=null){
        super("InternalServeError",StatusCodes.INTERNAL_SERVER_ERROR,`Something went wrong !!`,details)
    }
}

module.exports = InternalServerError