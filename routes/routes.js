import express from "express";
import {addPost, showPosts, showPostById} from "../controllers/postControl.js"

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.ejs");
})

router.get("/blog.ejs", showPosts);

router.get("/post/:id", showPostById);

router.get("/createPost.ejs", (req, res) => {
    res.render("createPost.ejs")
})


router.post("/add", addPost);

export default router;