import Blog from "../model/blogPostModel.js"

export const getBlog = async (req, res) =>{
  try{
    console.log(Blog.find())
    const blogs = await Blog.find()
    console.log(blogs)
    res.status(200).json(blogs)      
  } catch (error) {
    res.status(500).json({message:error.message})
  }

}

export const createBlog = async (req, res) =>{
     console.log("created")


}