const express = require('express')
const {taskController} = require('../../controller')

const router = express.Router()

router.get('/ping',(req,res)=>{
    res.send("Pong");
})

router.get('/',taskController.getAllTodo)

router.get('/:id',taskController.getTodo)

router.post('/',taskController.createTodo)

router.put('/:id',taskController.updateTodo)

router.delete('/:id',taskController.deleteTodo)

module.exports = router