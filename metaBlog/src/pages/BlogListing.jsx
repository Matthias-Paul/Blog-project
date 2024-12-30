import {useSelector} from "react-redux"
import BlogPost from "../component/BlogPost.jsx"
import heroImage from "../assets/heroImage.png"
import profileOne from "../assets/profileOne.png"
import Advertisement from "../component/Advertisement.jsx"

const BlogListing = () => {
  
  const {theme } =useSelector((state) => state.theme)
  return (
    <>
    <div  className="pt-[80px]  w-full m-auto font-work px-[20px]  ">
       <div  className="  max-w-[1300px] m-auto sm:px-[20px]  " >
       <div className="mt-[20px] mb-[45px] ">
                <div className="max-w-[1300px] flex relative  max-h-[650px]  "> <img className="w-full h-full " src={heroImage} alt="hero-image" /></div> 
                <div className={`absolute top-[85px] sm:top-[190px] md:top-[230px] lg:top-[300px] xl:top-[400px] p-[20px] lg:p-[35px] text-white max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] xl:max-w-[800px] ${theme ==="light"? " text-white": " text-white" } `} > 
                   <h4 className="text-[14px] font-[500] mb-[2px] md:mb-[8px] bg-[#4B6BFB] max-w-[90px] rounded-[6px] px-[8px] py-[4px] " >Technology</h4> 
                   <h1 className="text-[#181A2A] text-white font-[600] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[30px] xl:text-[36px] leading-[18px] sm:leading-[25px] md:leading-[30px]  lg:leading-[43px] py-[7px] sm:py-[12px] lg:py-[20px]  " >The Impact of Technology on the Workplace: How Technology is Changing</h1>
                   <div className="flex items-center text-white text-[13px] md:text-[16px] font-[500]">
                     <div className="max-w-[35px] mr-[5px] sm:mr-[15px] " > <img className="w-full" src={profileOne} alt="profile" /> </div>
                     <p className=" mr-[5px] md:mr-[40px] " >Jason Francisco</p>
                      <p>August 20, 2022</p>
                   </div>
                </div> 
            
             </div>
             < BlogPost/> 
       <div className="pb-[60px]">  <button className=" max-w-[1300px] flex m-auto  mt-[40px] py-[12px] px-[20px] border rounded-[6px] text-[#696A75] text-[14px] sm:text-[16px] font-[500]  "> Load More </button> </div>
        <Advertisement />
        </div>  
    </div>
    </>
  );
}

export default BlogListing;
