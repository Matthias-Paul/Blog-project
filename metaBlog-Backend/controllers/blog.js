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
        // Destructure and validate inputs
        const { title, post } = req.body;

        // Validation for required fields
        if (!title || !post) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // Validation for post length
        if (post.length < 50) {
            return res
                .status(400)
                .json({ error: "Post must be more than 50 characters." });
        }

        // Validation for title length
        if (title.length < 25) {
            return res
                .status(400)
                .json({ error: "Title must be more than 25 characters." });
        }        

        // Create a new blog post
        const newBlogPost = new Blog({
            title,    
            post,
        });

        // Save to database
        await newBlogPost.save();

        // Send success response
        res.status(201).json(newBlogPost);
        console.log("Blog post created successfully!");
    } catch (error) {
        // Handle errors gracefully
        console.error("Error creating blog:", error);
        res.status(500).json({ error: "Internal Server Error." });
    }
};
