import heroImage from "../assets/heroImage.png"
import profileOne from "../assets/profileOne.png"
import {useSelector} from "react-redux"
import {NavLink} from "react-router-dom"
import BlogPost from "../component/BlogPost.jsx"
const Home = () => {

    const {theme } =useSelector((state) => state.theme)
  return (
  <>
     <div className="pt-[80px]  w-full m-auto font-work px-[20px]  ">
       <div className="  max-w-[1300px] m-auto sm:px-[20px]  " >
             <div className="mt-[20px] pb-[180px] relative  ">
                <div className="max-w-[1300px] max-h-[650px]"> <img className="w-full  " src={heroImage} alt="hero-image" /></div> 
                <div className={`absolute bottom-[30px] sm:bottom-[70px] md:bottom-[100px] xl:bottom-[125px] left-[20px] sm:left-[60px] p-[20px] lg:p-[35px] border shadow-md rounded-[12px] max-w-[300px] md:max-w-[400px] lg:max-w-[600px] ${theme ==="light"? "bg-white text-black": "bg-white text-black" } `} > 
                   <h4 className="text-[14px] font-[500] mb-[2px] md:mb-[8px] bg-[#4B6BFB] text-white max-w-[90px] rounded-[6px] px-[8px] py-[4px] " >Technology</h4> 
                   <h1 className="text-[#181A2A] font-[600] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[36px] leading-[18px] sm:leading-[25px] md:leading-[30px] max-w-[350px] lg:max-w-[500px] lg:leading-[43px] py-[12px] lg:py-[20px]  " >The Impact of Technology on the Workplace: How Technology is Changing</h1>
                   <div className="flex items-center text-[#97989F] text-[13px] md:text-[16px] font-[500]">
                     <div className="max-w-[35px] mr-[5px] sm:mr-[15px] " > <img className="w-full" src={profileOne} alt="profile" /> </div>
                     <p className=" mr-[5px] md:mr-[40px] " >Jason Francisco</p>
                      <p>August 20, 2022</p>
                   </div>
                </div> 
             </div>
             <div className="flex justify-between mb-[20px] pt-[30px] sm:pt-[-20px]  ">
                 <div className="font-[700] text-[18px] md:text-[24px] "> Latest Post</div> 
                <NavLink to="/blog"> <div className="font-[500] text-[16px] rounded-[8px] hover:bg-[#4B6BFB] bg-[#E8E8EA] py-[6px] px-[22px] cursor-pointer " > Add Blog </div> </NavLink>  
             </div>  
             < BlogPost/>
        </div>
     
        <div className="pb-[350px]">  <button className=" max-w-[1300px] flex m-auto  mt-[40px] py-[12px] px-[20px] border rounded-[6px] text-[#696A75] text-[13px] sm:text-[16px] font-[500]  "> View All Post </button> </div>
     </div>    
  </>
  )
}

export default Home
