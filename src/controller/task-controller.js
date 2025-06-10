const {StatusCodes} = require('http-status-codes')
const NotImplementedError = require('../errors/notImplemented-error')
const TodoService = require('../service/todo-service')
const TodoRepository = require('../repository/todo-repository')

const todoService = new TodoService(new TodoRepository())

const getTodo = async function (req,res,next){
    try {
        const id = req.params.id;
        const todo = await todoService.getTodo(id);
        res.status(StatusCodes.OK).json({
            success:true,
            message:"Todo fetched SuccessFully",
            data:todo,
            error:{}
        })
    } catch (error) {
        next(error)
    }
}

const getAllTodo = async function(req,res,next){
    try {
        const todo = await todoService.getAllTodo()
        res.status(StatusCodes.OK).json({
            success:true,
            message:"Todo Fetched successfully",
            data:todo,
            error:{}
        })
    } catch (error) {
        next(error)
    }
}

const createTodo = async function(req,res,next){
    try {
        const data = await req.body
        const todo = await todoService.createTodo(data)
        res.status(StatusCodes.CREATED).json({
            success:true,
            message:"Todo created successfully",
            data:todo,
            error:{}
        })
    } catch (error) {
        next(error)
    }
}

const updateTodo = async function(req,res,next){
    try {   
        const id = req.params.id;
        const body = req.body
        const todo = await todoService.updateTodo(id,body)
        res.status(StatusCodes.OK).json({
            success:true,
            message:"Todo Updated Successfully",
            error:{},
            data:todo
        })
    } catch (error) {
        next(error)
    }
}

const deleteTodo  = async function(req,res,next){
    try {
        const id = req.params.id;
        const todo = await todoService.deleteTodo(id);
        res.status(StatusCodes.OK).json({
            success:true,
            message:"Todo Deleted Successfully",
            error:{},
            data:todo
        })
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