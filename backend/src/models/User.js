const Database = require('../db/config')

module.exports = {
    async getUserTodos(userId){
        const db = await Database();

        const todos = await db.all(`SELECT text, id FROM todos WHERE ownerId = ${userId}`)

        await db.close()

        return todos
    }
}