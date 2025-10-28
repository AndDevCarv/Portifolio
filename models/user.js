import pg from "pg";

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "flags",
    password: "",
    port: 5432
});

export default db;