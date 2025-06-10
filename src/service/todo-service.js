
class TodoService {
    constructor(repository){
        this.repository = repository
    }

    async createTodo(body){
        const todo = await this.repository.createTodo(body)
        return todo
    }

    async getAllTodo(){
        const todo = await this.repository.getAllTodo();
        return todo
    }

    async getTodo(id){
        const todo = await this.repository.getTodo(id)
        return todo;
    }

    async updateTodo(id,body){
        const updatedTodo = await this.repository.updateTodo(id,body);
        return updatedTodo;
    }

    async deleteTodo(id){
        const deletedTodo = await this.repository.deleteTodo(id);
        return deletedTodo;
    }

}

module.exports = TodoService