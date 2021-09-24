const User = require('../models/User')

module.exports = {
    async getTodos(req, res){
        const userId = res.locals['userId']

        const todos = await User.getUserTodos(userId)

        res.json(todos)
    }
}