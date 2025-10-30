import db from "./user.js";

export async function insertPost (title, prev, text) {
    try {
        await db.query("INSERT INTO posts (titulo, previa, conteudo, data_postagem) VALUES ($1, $2, $3, CURRENT_TIMESTAMP)",
             [title, prev, text]);
    } catch (error) {
        console.log("Erro ao fazer consulta: " + error);
        
    }
}

export async function selectPost() {
    try {
        const result = await db.query("SELECT * FROM posts");
        return result.rows
    } catch (error) {
        console.log("Erro ao fazer consulta: " + error);
    }
}

export async function selectPostById(id) {
    try {
        const result = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
        return result.rows[0];
    } catch (error) {
        console.log("Erro ao fazer consulta: " + error);
    }
}

