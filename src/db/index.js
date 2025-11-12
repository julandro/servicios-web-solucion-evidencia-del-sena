import Database from 'better-sqlite3';

const db = new Database('databaseExample.db', { verbose: console.log });

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS usuarios(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
    )
    `
).run();

export default db;
