const {StatusCodes} = require('http-status-codes')
const NotImplementedError = require('../errors/notImplemented-error')

const getTodo = function(req,res,next){
    try {
        throw new NotImplementedError('getTodo');
    } catch (error) {
        next(error)
    }
}

const getAllTodo = function(req,res,next){
    try {
        throw new NotImplementedError("getAllTodo");
    } catch (error) {
        next(error)
    }
}

const createTodo = function(req,res,next){
    try {
        throw new NotImplementedError('createTodo')
    } catch (error) {
        next(error)
    }
}

const updateTodo = function(req,res,next){
    try {
        throw new NotImplementedError("updateTodo")
    } catch (error) {
        next(error)
    }
}

const deleteTodo  = function(req,res,next){
    try {
        throw new NotImplementedError("deleteTodo")
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllTodo,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
}