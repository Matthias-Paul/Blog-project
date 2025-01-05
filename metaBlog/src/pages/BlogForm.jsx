import heroImage from "../assets/heroImage.png"
import {useState} from "react";
import { useSelector } from "react-redux";
import { filteredData } from "../redux/blogSlice.js";

const BlogForm = () => {
  const blogs = useSelector(filteredData);
 const [title, setTitle] = useState("") 
 const [post, setPost] = useState("") 

  const handleSubmit = async (e) =>{
      e.preventDefault()
      console.log(post, title)
      const createdPost = {
        title,
        post
      }
try {

    const res = await fetch("http://localhost:3000/api/blog/create-blog",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createdPost),
      }
    );
    const data = await res.json()

   blogs([...blogs, data])




} catch (error) {
  console.log(error.message)
}

  }
  
  return (
    <>
      <div className="pt-[80px]  w-full m-auto font-work px-[20px]  ">
        <div className="  max-w-[1300px] m-auto  sm:px-[20px] pb-[700px] " >
        <div className="max-w-[1300px] max-h-[650px] flex relative justify-center items-center ">
           <img className="w-full h-full  " src={heroImage} alt="hero-image" />
           <div className=" bg-[#FAFAFC] max-w-[730px] absolute top-[200px] sm:top-2/3 rounded-[8px] mx-[40px] p-[40px] sm:p-[55px] " >
       <form className=" max-w-[600px]" onSubmit={handleSubmit}>
         <div className="font-[600]  text-[24px] border-[#E6E6F0] mb-[40px] border-b-[1px] pb-[20px] text-[#32264D] "> Blog Form</div> 
          <label className=" text-[14px] text-[#4E4958] block  "  htmlFor="title">Title</label>
          <input onChange={(e) => setTitle(e.target.value)} value={title} className="border p-[12px] text-black sm:p-[20px] rounded-[8px] outline-none mt-[12px] w-[270px] sm:w-[320px] md:w-[400px] lg:w-[600px] " id="title" type="text" />
      
          <label className=" text-[14px] text-[#4E4958] block mt-[40px]  "  htmlFor="description">Description</label>
          <textarea onChange={(e) => setPost(e.target.value)} value={post} className="border text-black p-[12px] sm:p-[20px] rounded-[8px] outline-none mt-[12px] w-[270px] sm:w-[320px] md:w-[400px] lg:w-[600px] resize-none " rows={4} id="description" type="text" />
          <button type="submit" className="bg-[#4B6BFB] text-[16px] font-[600px] text-white w-full text-center rounded-[8px] py-[15px] mt-[40px] mb-[45px] active:opacity-[0.8] "  >Submit</button>
        
       </form>
       </div>
           </div> 
      
        </div>
      </div>
    </>
  )
}

export default BlogForm
