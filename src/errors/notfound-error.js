const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base-error");


class NotFoundError extends BaseError{
    constructor(resourceName,resourceValue = "some value",details=null){
        super("NotFoundError",StatusCodes.NOT_FOUND,`Not found ${resourceName} with value ${resourceValue}`)
    }
}

module.exports = NotFoundError