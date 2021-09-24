const Todo = require('../models/Todo')

module.exports = {
    async create(req, res){

        const userId = res.locals['userId']
        const todoText = req.body.todoText
    
        const createdTodo = await Todo.create(userId, todoText)

        return res.status(200).send('worked')
    },

    async delete(req, res) {
        const todoId = req.body.id

        await Todo.delete(todoId)

        return res.status(200).send('worked')

    }
}