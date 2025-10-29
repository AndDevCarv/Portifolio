import db from "./user.js";

export async function insertPost (title, prev, text) {
    try {
        await db.query("INSERT INTO posts (titulo, previa, conteudo, data_postagem) VALUES ($1, $2, $3, CURRENT_TIMESTAMP)",
             [title, prev, text]);
    } catch (error) {
        console.log("erro:" + error);
        
    }
}