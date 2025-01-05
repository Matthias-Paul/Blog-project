 import express from "express"
 import { getBlog, createBlog } from "../controllers/blog.js"

 const router = express.Router()



router.get("/blog-post", getBlog)
router.get("/create-blog", createBlog)




export default router;




