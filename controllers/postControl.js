import {insertPost} from "../models/postModel.js";

export async function addPost (req, res) {
    const {title, prev, texxt} = req.body;

    try {
        await insertPost(title, prev, texxt)
        res.redirect("/blog.ejs");
    } catch (error) {
        console.log(`Erro ${error} ao adicionar post`);
        res.status(500).send("Erro interno do servidor");
    }

}