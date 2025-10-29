import pg from "pg";

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "blog_andre",
    password: "qwe123",
    port: 5432
});

db.connect();

export default db;