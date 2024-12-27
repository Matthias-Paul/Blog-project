import { useSelector } from "react-redux";
import {filteredData} from "../redux/blogSlice.js"


const BlogPost = () => {

const blogs = useSelector(filteredData)

    return (
    <>
    <div className="w-full m-auto font-work px-[20px] " >
        <div className="max-w-[1300px] m-auto px-[20px] " >
           {
             blogs.map((blog)=> (
               
                    <div key={blog.id}>
                     <div className="text-xl pt-[20px] "> {blog.image} </div> 
                     <div className="text-xl pt-[20px] "> {blog.author} </div> 
                     <div className="text-xl pt-[20px] "> {blog.title} </div> 
                    </div>

                )
             )

           }
         
        </div>

    </div>
    
    </>
    )
  }
  
  export default BlogPost

