import {
  insertPost,
  selectPost,
  selectPostById,
  updatePost,
  deletePost
} from "../models/postModel.js";

export function showIndex(req, res) {
  try {
    res.render("index.ejs");
  } catch (error) {
    console.log("Erro na renderização do arquivo" + error);
  }
}

export function showCreatePost(req, res) {
  try {
    res.render("createPost.ejs", { post: null });
  } catch (error) {
    console.log("Erro na renderização do arquivo" + error);
  }
}

export async function addPost(req, res) {
  const { title, prev, texxt } = req.body;

  try {
    await insertPost(title, prev, texxt);
    res.redirect("/blog.ejs");
  } catch (error) {
    console.log(`Erro ${error} ao adicionar post`);
    res.status(500).send("Erro interno do servidor");
  }
}

export async function showPosts(req, res) {
  try {
    const posts = await selectPost();
    res.render("blog.ejs", { posts });
  } catch (error) {
    console.log("Erro ao selecionar posts: " + error);
  }
}

export async function showPostById(req, res) {
  try {
    const { id } = req.params;
    const post = await selectPostById(id);
    res.render("post.ejs", { post });
  } catch (error) {
    console.log("Erro ao receber parametros: " + error);
  }
}

export async function showEditPost(req, res) {
  try {
    const { id } = req.params;
    const post = await selectPostById(id);
    res.render("createPost.ejs", { post: post || null });
  } catch (error) {
    console.log("Erro ao receber parametros: " + error);
  }
}

export async function insertUpdatePost(req, res) {
  try {
    const { id } = req.params;
    const { title, prev, texxt } = req.body;
    await updatePost(title, prev, texxt, id);
    res.redirect("/blog.ejs");
  } catch (error) {
    console.log("erro ao inserir dados para edição" + error);
  }
}

export async function deletePostById(req, res) {
    try {
        const {id} = req.params;
        await deletePost(id);
        res.redirect("/blog.ejs")
    } catch (error) {
        console.log("erro ao enviar dados para exclusão" + error);
    }
}