import { Router } from "express"
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../controllers/postController"

export const postRoutes = Router()

postRoutes.get("/posts", getPosts)
postRoutes.post("/posts", createPost)
postRoutes.put("/posts/:id", updatePost)
postRoutes.delete("/posts/:id", deletePost)
