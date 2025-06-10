const BaseError = require("../errors/base-error")
const { StatusCodes } = require("http-status-codes")

const errorHandler = function(err,req,res,next){
    if(err instanceof BaseError){
        res.status(err.statusCode).json({
            success:false,
            message:err.message,
            error:err.details,
            data:{}
        })
    }else if(err.name === "CastError" && err.kind === "ObjectId"){
         console.error(`[DATABASE ERROR] Duplicate Key/Unique Constraint Violation: ${err.message}`, err.stack);
        res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            name: 'BadRequestError',
            message: `Invalid ID format for ${err.path || 'resource'}: ${err.value}`,
            error: { field: err.path, value: err.value, expected: err.kind },
            data: {}
        })
    }else{
         console.error('[PROGRAMMATIC ERROR] Unexpected Error:', err.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            name:"Internal Server Error",
            message:"Something went wrong on our end ",
            error:err,
            data:{}
        })
    }
}

module.exports = errorHandler