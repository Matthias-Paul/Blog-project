 import express from "express"
 import { getBlog } from "../controllers/blog.js"

 const router = express.Router()



router.get("/blog-post", getBlog)



export default router;




