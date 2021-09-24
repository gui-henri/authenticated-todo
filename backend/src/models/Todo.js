const Database = require('../db/config')

module.exports = {
    async create(userId, todoText){

        const db = await Database()

        db.run(`INSERT INTO todos (
            ownerId,
            text
        ) VALUES (
            ${userId},
            "${todoText}"
        )`)

        await db.close()

        return
    },

    async delete(todoId){
        const db = await Database()

        db.run(`DELETE FROM todos WHERE id = ${todoId}`)

        await db.close()

        return
    }
}