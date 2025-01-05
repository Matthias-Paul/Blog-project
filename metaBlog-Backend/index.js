import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import getBlog from "./routes/route.js"
import createBlog from "./routes/route.js"
import path from "path"
import { fileURLToPath } from "url"




dotenv.config();

const PORT = process.env.PORT;
const MONGO = process.env.MONGO;
const app = express();

app.use(cors());
app.use(express.json());


const _filename = fileURLToPath(import.meta.url)
  
const _dirname = path.dirname(_filename)
console.log(_dirname)
  

app.use(express.static(path.join(_dirname, "../metaBlog/dist")))




mongoose
  .connect(MONGO)
  .then(() => console.log("Mongo DB connected successfully"))
  .catch((error) => console.log("MongoDB connection error:", + error.message));
 

  
          

      app.use("/api/blog/", getBlog)  
      app.use("/api/blog/", createBlog) 


      app.get("*", (req, res)  => res.sendFile(path.join(_dirname, "../metaBlog/dist/index.html")))
        
        

      app.listen(PORT, () => {
        console.log("App is running on port:", +PORT);
      });
