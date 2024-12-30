import { singleBlogData } from "../data";
import { useSelector } from "react-redux";
import Advertisement from "../component/Advertisement.jsx";

const SinglePost = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <>
      <div className="w-full pt-[120px] m-auto font-serif px-[20px] ">
        <div className=" max-w-[800px] m-auto sm:px-[20px]">
          {singleBlogData.map((data) => (
            <div key={data.id}>
              <h2 className="text-[14px] font-work font-[500] text-white mb-[2px] md:mb-[8px] bg-[#4B6BFB] max-w-[90px] rounded-[6px] px-[8px] py-[4px] ">
                {data.text}
              </h2>
              <h1 className=" text-[26px] sm:text-[36px] font-[600] font-work py-[12px] sm:py-[15px] leading-[28px] sm:leading-[40px] ">
                {data.title}
              </h1>
              <div className="flex font-work items-center text-[16px] font-[500]">
                <div className="max-w-[35px] mr-[5px] sm:mr-[15px] ">
                  {" "}
                  <img
                    className="w-full"
                    src={data.profile}
                    alt="profile"
                  />{" "}
                </div>
                <p className=" mr-[5px] md:mr-[40px] ">{data.author}</p>
                <p>{data.date}</p>
              </div>
              <div className="max-w-[800px] py-[40px] ">
                {" "}
                <img
                  className="w-full"
                  src={data.imageOne}
                  alt={data.title}
                />{" "}
              </div>
              <p
                className={` text-[17px] leading-[26px] sm:text-[20px] sm:leading-[32px] mb-[35px] sm:mb-[50px] ${
                  theme === "light" ? " text-[#3B3C4A]" : " text-white"
                }`}
              >
                {data.paragraphOne}
              </p>
              <p
                className={` text-[17px] leading-[26px] sm:text-[20px] sm:leading-[32px] mb-[35px] sm:mb-[50px] ${
                  theme === "light" ? " text-[#3B3C4A]" : " text-white"
                }`}
              >
                {data.paragraphTwo}
              </p>

              <h1 className=" text-[21px] sm:text-[24px] font-[600] mb-[15px]  ">
                {" "}
                {data.headingOne}{" "}
              </h1>
              <p
                className={` text-[17px] leading-[26px] sm:text-[20px] sm:leading-[32px] mb-[35px] sm:mb-[50px] ${
                  theme === "light" ? " text-[#3B3C4A]" : " text-white"
                }`}
              >
                {data.paragraphThree}
              </p>
              <p
                className={` text-[17px] leading-[26px] sm:text-[20px] sm:leading-[32px] mb-[35px] sm:mb-[50px] ${
                  theme === "light" ? " text-[#3B3C4A]" : " text-white"
                }`}
              >
                {data.paragraphFour}
              </p>

              <h1 className=" text-[21px] sm:text-[24px] font-[600] mb-[15px]  ">
                {" "}
                {data.headingTwo}{" "}
              </h1>
              <p
                className={` text-[17px] leading-[26px] sm:text-[20px] sm:leading-[32px] mb-[35px] sm:mb-[50px] ${
                  theme === "light" ? " text-[#3B3C4A]" : " text-white"
                }`}
              >
                {data.paragraphFive}
              </p>
              <p
                className={` text-[17px] leading-[26px] sm:text-[20px] sm:leading-[32px] mb-[35px] sm:mb-[50px] ${
                  theme === "light" ? " text-[#3B3C4A]" : " text-white"
                }`}
              >
                {data.paragraphSix}
              </p>

              <div
                className={`bg-[#F6F6F7] max-w-[800px] border border-l-[4px] text-[#181A2A] border-[#E8E8EA] rounded-[12px] text-center text-[19px] sm:text-[22px] mb-[20px] p-[30px] italic`}
              >
                {" "}
                {data.quote}{" "}
              </div>

              <div className="max-w-[800px] py-[20px] pb-[40px] ">
                {" "}
                <img
                  className="w-full"
                  src={data.imageTwo}
                  alt={data.title}
                />{" "}
              </div>
              <Advertisement />

              <h1 className=" text-[21px] mt-[-50px] sm:text-[24px] font-[600] mb-[15px]  ">
                {" "}
                {data.headingThree}{" "}
              </h1>
              <p
                className={` text-[17px] leading-[26px] sm:text-[20px] sm:leading-[32px] mb-[35px] sm:mb-[50px] ${
                  theme === "light" ? " text-[#3B3C4A]" : " text-white"
                }`}
              >
                {data.paragraphSeven}
              </p>

              <h1 className=" text-[21px] sm:text-[24px] font-[600] mb-[15px]  ">
                {" "}
                {data.headingFour}{" "}
              </h1>
              <p
                className={` text-[17px] leading-[26px] sm:text-[20px] sm:leading-[32px] mb-[35px] sm:mb-[40px] ${
                  theme === "light" ? " text-[#3B3C4A]" : " text-white"
                }`}
              >
                {data.paragraphEight}
              </p>

              <h1 className=" text-[21px] sm:text-[24px] font-[600] mb-[15px]  ">
                {" "}
                {data.headingFive}{" "}
              </h1>
              <p
                className={` text-[17px] leading-[26px] sm:text-[20px] sm:leading-[32px] mb-[35px] sm:mb-[40px] ${
                  theme === "light" ? " text-[#3B3C4A]" : " text-white"
                }`}
              >
                {data.paragraphNine}
              </p>

              <h1 className=" text-[21px] sm:text-[24px] font-[600] mb-[15px]  ">
                {" "}
                {data.headingSix}{" "}
              </h1>
              <p
                className={` text-[17px] leading-[26px] sm:text-[20px] sm:leading-[32px] mb-[35px] sm:mb-[40px] ${
                  theme === "light" ? " text-[#3B3C4A]" : " text-white"
                }`}
              >
                {data.paragraphTen}
              </p>

              <h1 className=" text-[21px]  sm:text-[24px] font-[600] mb-[15px]  ">
                {" "}
                {data.conclusion}{" "}
              </h1>
              <p
                className={` text-[17px] leading-[26px] sm:text-[20px] sm:leading-[32px] pb-[35px] sm:pb-[40px] ${
                  theme === "light" ? " text-[#3B3C4A]" : " text-white"
                }`}
              >
                {data.lastParagraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SinglePost;
