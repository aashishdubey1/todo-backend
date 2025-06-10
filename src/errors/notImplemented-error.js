const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base-error");


class NotImplementedError extends BaseError {
    constructor(feature,details=null){
        super("NotImplementedError",StatusCodes.NOT_IMPLEMENTED,`The Feature ${feature} is not Implemented yet`,{})
    }
}

module.exports = NotImplementedError