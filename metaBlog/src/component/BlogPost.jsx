import { useSelector } from "react-redux";
import { filteredData } from "../redux/blogSlice.js";
import { blogData } from "../data.js"; 

const BlogPost = () => {
    // Get filtered blogs
    const blogs = useSelector(filteredData);

    return (
        <>
            <div className="w-full m-auto font-work ">
                <div className=" max-w-[500px] lg:max-w-[900px] xl:max-w-[1300px] grid-cols-1 lg:grid-cols-2 grid xl:grid-cols-3 gap-x-[20px] m-auto">
                    {
                        blogs.length > 0 ? (
                            blogs.map((blog) => {
                                // Access data from blogData based on blog.id
                                const blogDetails = blogData.find((item) => item.id === blog.id);

                                if (!blogDetails) return null;

                                return (
                                    <div className="mb-[20px] p-[16px] border border-color-[#E8E8EA] cursor-pointer rounded-[12px] " key={blog.id}>
                                   
                                        <div>
                                            <img src={blogDetails.image} alt={blogDetails.title} />
                                        </div>
                                   
                                        <div className="text-[14px] font-[500] text-[#4B6BFB] max-w-[90px] my-[26px] bg-[#4B6BFB0D] rounded-[6px] px-[10px] py-[4px] ">
                                            {blog.text}
                                        </div>
                                      
                                        <div className=" text-[22px] sm:text-[26px] font-[600] mb-[24px] leading-[30px]  ">
                                            {blog.title}
                                        </div>
                                      
                                        <div className="flex items-center text-[14px] sm:text-[16px] font-[500] text-[#97989F] ">
                                            <div className="max-w-[35px]">
                                                <img
                                                    className="w-full"
                                                    src={blogDetails.profile}
                                                    alt="profile"
                                                />
                                            </div>
                                            <p className=" ml-[7px]  sm:ml-[10px]  ">{blog.author}</p>
                                            <p className="  ml-[30px] sm:ml-[40px]">{blog.date}</p>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                         
                            <div className=" text-[25px] font-[500] py-[30px]">
                               No result found
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default BlogPost;
