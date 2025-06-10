const Todo = require("../modal");
const NotFoundError = require('../errors/notfound-error')

class TodoRepository {
    constructor(){

    }
    async createTodo(data){
        const todo = await Todo.create(data);
        return todo;
    }

    async getAllTodo(){
        const todos = await Todo.find({});
        return todos
    }
    async getTodo(id){
        const todo = await Todo.findById(id);
        if(!todo){
            throw new NotFoundError("Todo",id)
        }
        return todo;
    }

    async updateTodo(id,body){
        const updatedTodo = await Todo.findByIdAndUpdate(id,body,{new:true})
        if(!updatedTodo){
            throw new NotFoundError("Todo",id)
        }
        return updatedTodo
    }

    async deleteTodo(id){
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if(!deletedTodo){
            throw new NotFoundError("Todo",id);
        }
        return deletedTodo
    }

}

module.exports = TodoRepository