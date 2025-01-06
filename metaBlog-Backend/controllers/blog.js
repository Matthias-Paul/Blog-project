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

export const createBlog = async (req, res, next) => {
    try {
 
        const { title, post } = req.body;

        if (!title || !post) {
            return res.status(400).json({ error: "All fields are required." });
        }
               
        if (title.length < 10) {
            return res.status(400).json({ error: "Title must be more than 10 characters." });
        }  
     
        if (post.length < 50) {
            return res.status(400).json({ error: "Description must be more than 50 characters." });
        }
          

        // Create a new blog post
        const newBlogPost = new Blog({
            title,    
            post,
        });      

        // Save to database
        await newBlogPost.save();

        res.status(201).json(newBlogPost);    
        console.log("Blog post created successfully!");
    } catch (error) {
           
        console.error("Error creating blog:", error);
        res.status(500).json({ error: "Internal Server Error." });
    }
};
