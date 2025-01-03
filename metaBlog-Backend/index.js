import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import getBlog from "./routes/route.js"


dotenv.config();

const PORT = process.env.PORT;
const MONGO = process.env.MONGO;
const app = express();

app.use(cors());
app.use(express.json());





mongoose
  .connect(MONGO)
  .then(() => console.log("Mongo DB connected successfully"))
  .catch((error) => console.log("MongoDB connection error:", + error.message));
 

  


app.use("/api/blog/", getBlog)  


app.get("/", (req, res)=>{
    res.send("home")
})




app.listen(PORT, () => {
  console.log("App is running on port:", +PORT);
});
