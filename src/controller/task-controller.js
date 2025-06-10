const {StatusCodes} = require('http-status-codes')


const getTodo = function(req,res){
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        success:false,
        message:"This feature in not implemented yet",
        data:{},
        error:{}
    })
}

const getAllTodo = function(req,res){
        res.status(StatusCodes.NOT_IMPLEMENTED).json({
        success:false,
        message:"This feature in not implemented yet",
        data:{},
        error:{}
    })
}

const createTodo = function(req,res){
        res.status(StatusCodes.NOT_IMPLEMENTED).json({
        success:false,
        message:"This feature in not implemented yet",
        data:{},
        error:{}
    })
}

const updateTodo = function(req,res){
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        success:false,
        message:"This feature in not implemented yet",
        data:{},
        error:{}
    })
}

const deleteTodo  = function(req,res){
    res.status(StatusCodes.NOT_IMPLEMENTED).json({
        success:false,
        message:"This feature in not implemented yet",
        data:{},
        error:{}
    })
}

module.exports = {
    getAllTodo,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
}