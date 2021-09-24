const Database = require('./config')

const initDb = {
    async init(){
        const db = await Database();

        //Create the user todo table

        await db.exec(`CREATE TABLE todos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ownerId INTEGER,
            text TEXT
        )`)

        await db.run(`INSERT INTO todos(
            ownerId,
            text
        ) VALUES (
            104758680595694630935,
            "Ordenhar a vaca."
        )`)

        await db.close();
    }
}

initDb.init()