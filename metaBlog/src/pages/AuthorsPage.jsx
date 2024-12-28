
import BlogPost from "../component/BlogPost.jsx"

const AuthorsPage = () => {
  return (
    <>
     <div className="pt-[80px]  w-full m-auto font-work px-[20px]  ">
       <div className="  max-w-[1300px] m-auto sm:px-[20px] pb-[60px] " >


            
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
