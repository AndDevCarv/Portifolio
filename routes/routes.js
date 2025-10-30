import express from "express";
import {addPost, showPosts, showPostById, showEditPost} from "../controllers/postControl.js"

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.ejs");
})

router.get("/blog.ejs", showPosts);

router.get("/post/:id", showPostById);

router.get("/edit/:id", showEditPost);


router.post("/add", addPost);

export default router;