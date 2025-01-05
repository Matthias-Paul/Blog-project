import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { filteredData, fetchBlogsStart, fetchBlogsSuccess, fetchBlogsFailure, } from "../redux/blogSlice.js";


const BlogPost = () => {
 const dispatch = useDispatch();
 const blogs = useSelector(filteredData);
 const status = useSelector((state) => state.data.status);


 useEffect(() => {
  const fetchData = async () => {
    try {
      dispatch(fetchBlogsStart());
      const response = await fetch("http://localhost:3000/api/blog/blog-post");
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      dispatch(fetchBlogsSuccess(data));
  } catch (error) {
      dispatch(fetchBlogsFailure(error.message));
  }
  
  };

  fetchData();
}, [dispatch]);




  return (
    <>
      <div className="w-full m-auto font-work ">
        <div className=" max-w-[500px] lg:max-w-[900px] xl:max-w-[1300px] grid-cols-1 lg:grid-cols-2 grid xl:grid-cols-3 gap-x-[20px] m-auto">
   

          {blogs.length > 0 ? (
            blogs.map((blog) => {
             
              return (
                <div
                  className="mb-[20px] p-[16px] border border-color-[#E8E8EA] cursor-pointer rounded-[12px] "
                  key={blog.id}
                >
                  <div>
                    <img src={blog.image} alt={blog.title} />
                  </div>

                  <div className="text-[14px] font-[500] text-[#4B6BFB] max-w-[90px] my-[26px] bg-[#4B6BFB0D] rounded-[6px] px-[10px] py-[4px] ">
                   Technology
                  </div>

                  <div className=" text-[22px] sm:text-[26px] font-[600] mb-[24px] leading-[30px]">
                    {blog.title}
                  </div>

                  <div className="flex items-center text-[14px] sm:text-[16px] font-[500] text-[#97989F] ">
                    <div className="w-[35px] h-[35px]  ">
                      <img 
                        className="w-full h-full "
                        src={blog.icon}
                        alt="profile"/>
                    </div>
                    <p className=" ml-[7px]  sm:ml-[10px]  ">{blog.author}</p>
                    <p className="  ml-[30px] sm:ml-[40px]">{blog.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-[18px] sm:text-[25px] font-[500] py-[30px]">
              {status === "loading"? <div> Loading blog data... </div> : <div  className=" text-red-400">  No blog found  </div> }
                 {
                    status === "failed"? <div  className="text-red-400">Cannot fetch blog data </div>: ""
                  }
                          </div>
          )}
          

        </div>
      </div>
    </>
  );
};

export default BlogPost;
