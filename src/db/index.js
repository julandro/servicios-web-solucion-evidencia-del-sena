import Database from 'better-sqlite3';

const db = new Database('databaseExample.db');

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS usuarios(
        id TEXT PRIMARY KEY NOT NULL,
        nombre TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    )
    `
).run();

export default db;
