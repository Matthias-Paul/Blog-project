import mongoose from "mongoose"


const formatDate = (date) => {
    const options = { month: "long",  day: "2-digit", year: "numeric" };
    return new Date(date).toLocaleDateString("en-GB", options); // "20 September 2023"
};


const blogSchema = new mongoose.Schema({
    title: {
        type:String,
        required:[true, "Title is required"],
    },

    post: {
        type:String,
        required:[true, "Post content is required"],
    },

    author: {
        type:String,
        default: "Anonymous",
    },

    date: {
        type:String,
        default: function () {

            return formatDate(new Date()); // Fixed date when created
              
        },
    },

    icon: {
        type:String,
        default:"https://res.cloudinary.com/drkxtuaeg/image/upload/v1735897100/Image_4_jb0cpq.png",
    },

    image: {
        type:String,
        default:"https://res.cloudinary.com/drkxtuaeg/image/upload/v1735897362/image2_nrlm3g.png",
    },
})

const Blog = mongoose.model("blog", blogSchema)

export default Blog;