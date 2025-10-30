import express from "express";
import {
  addPost,
  showPosts,
  showPostById,
  showEditPost,
  showCreatePost,
  showIndex,
  insertUpdatePost,
  deletePostById
} from "../controllers/postControl.js";

const router = express.Router();

router.get("/", showIndex);

router.get("/add", showCreatePost);

router.get("/blog.ejs", showPosts);

router.get("/post/:id", showPostById);

router.get("/edit/:id", showEditPost);

router.post("/edit/:id", insertUpdatePost)

router.post("/add", addPost);

router.post("/delete/:id", deletePostById);

export default router;
