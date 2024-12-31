import heroImage from "../assets/heroImage.png"

const BlogForm = () => {
  return (
    <>
      <div className="pt-[80px]  w-full m-auto font-work px-[20px]  ">
        <div className="  max-w-[1300px] m-auto sm:px-[20px] pb-[300px] " >
        <div className="max-w-[1300px] max-h-[650px] relative "> <img className="w-full  " src={heroImage} alt="hero-image" /></div> 
       <div className=" bg-[#FAFAFC] m-auto absolute rounded-[8px] max-w-[730px] p-[55px] " >
       <form className=" w-full ">
         <div className="font-[600] text-[24px] border-[#E6E6F0] mb-[40px] border-b-[1px] text-[#32264D] "> Blog Form</div> 
         <div className="w-full ">
          <label className=" text-[14px] text-[#4E4958]  "  htmlFor="title">Title</label>
          <input className="border p-[20px] rounded-[8px] mt-[12px] max-w-[600px] " id="title" type="text" />
         </div>
        
       </form>
       </div>
        </div>
      </div>
    </>
  )
}

export default BlogForm
