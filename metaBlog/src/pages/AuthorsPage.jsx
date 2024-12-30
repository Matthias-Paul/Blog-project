import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import youTube from "../assets/youTube.png"

import {useSelector} from "react-redux"
import BlogPost from "../component/BlogPost.jsx"
import { authorPageData } from "../data.js"; 


const AuthorsPage = () => {
  const {theme } =useSelector((state) => state.theme)
  return (
    <>
     <div className="pt-[80px]  w-full m-auto font-work px-[20px]  ">
       <div className="  max-w-[1300px] m-auto sm:px-[20px] pt-[35px] pb-[60px] " >
              <div className={`bg-[#F6F6F7] grid p-[25px] sm:p-[45px]  text-center rounded-[12px]  max-w-[1300px] m-auto ${theme ==="light"? " text-[#3B3C4A] ":" border bg-black text-white" } `}>
                  {
                   authorPageData.map((data) =>(
                    <div  key={data.id}>
                       <div className="flex text-start  justify-center items-center " >
                        <div className=" max-w-[65px] mr-[15px]  " > <img className="w-full"  src={data.icon} alt={data.name}  />  </div>
                        <div>
                          <h3 className={` text-[#181A2A] ${theme ==="light"? " text-[#696A75] ": "text-white" }  font-[500] text-[22px] sm:text-[24px] `}>{data.name}</h3>
                          <h3  className={` font-[400] text-[14px] ${theme ==="light"? " text-[#696A75] ": "text-white" }  `}>{data.occupation}</h3>
                        </div>
                       </div>
                       <p className=" text-[16px] sm:text-[18px] font-[400] py-[20px] sm:py-[30px] max-w-[650px] flex m-auto " > {data.paragraph} </p>
                     <div className="flex justify-center" >
                      <div className="mr-[8px] max-w-[32px] cursor-pointer " > <img className="w-full" src={facebook} alt="SocialIcon" /> </div> 
                      <div className="mr-[8px] max-w-[32px] cursor-pointer " > <img className="w-full" src={twitter} alt="SocialIcon" /> </div> 
                      <div className="mr-[8px] max-w-[32px] cursor-pointer " > <img className="w-full" src={instagram} alt="SocialIcon" /> </div> 
                      <div className="mr-[8px] max-w-[32px] cursor-pointer " > <img className="w-full" src={youTube} alt="SocialIcon" /> </div> 
                    </div>
                    </div> 
                


                   ))
                
                
                  }
                
               </div>

            
             <div className="flex justify-start mb-[20px] pt-[30px] sm:pt-[-20px]  ">
                 <div className="font-[700] text-[18px] md:text-[24px] "> Latest Post</div> 
             </div>  
             < BlogPost/>
        </div>
    
     </div>    
  </>
  )
}

export default AuthorsPage
