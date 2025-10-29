import express from "express";
import {addPost} from "../controllers/postControl.js"

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.ejs");
})

router.get("/blog.ejs", (req, res) => {
    res.render("blog.ejs");
})

router.get("/post.ejs", (req, res) => {
    res.render("post.ejs")
})

router.get("/createPost.ejs", (req, res) => {
    res.render("createPost.ejs")
})


router.post("/add", addPost);

export default router;