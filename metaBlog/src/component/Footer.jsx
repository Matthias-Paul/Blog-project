import { NavLink } from "react-router-dom";
import mail from "../assets/mail.png";
import logo from "../assets/logoB.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className=" w-full bg-[#F6F6F7] font-jakarta m-auto pb-[50px]">
        <div className=" min-h-[400px]  max-w-[1300px] border-b-[1px] px-[20px]   m-auto pt-[80px] justify-center grid md:grid-cols-2 lg:grid-cols-3 lg:justify-between  ">
          <div>
            <h1 className="font-[600] text-[#181A2A] text-[18px] pb-[20px]  ">
              {" "}
              About{" "}
            </h1>
            <p className="text-[#696A75] font-[400] max-w-[270px] text-[16px] mb-[23px]  ">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam{" "}
            </p>
            <div className="flex">
              <h1 className="font-[600] text-[#181A2A] text-[16px] ">
                {" "}
                Email :{" "}
              </h1>
              <p className="text-[#181A2A] font-[400] ml-[5px] text-[16px]">
                {" "}
                info@jstemplate.net
              </p>
            </div>
            <div className="flex">
              <h1 className="font-[600] text-[#181A2A] text-[16px] ">
                {" "}
                Phone :{" "}
              </h1>
              <p className="text-[#181A2A] font-[400] ml-[5px] text-[16px]">
                880 123 456 789
              </p>
            </div>
          </div>

          <div className=" flex space-x-[70px] ">
            <div className="md:my-[0px] mt-[50px]  ">
              <h1 className=" font-[600] text-[#181A2A] text-[18px] mb-[20px] ">
                {" "}
                Quick Link{" "}
              </h1>
              <ul className="text-[#696A75] font-[400] text-[16px] space-y-[10px] ">
                <li>
                  {" "}
                  <NavLink to="/"> Home </NavLink>{" "}
                </li>
                <li>
                  {" "}
                  <NavLink to=""> About </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/blog"> Blog </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> Archived </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/contact"> Author </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to=""> Contact </NavLink>
                </li>
              </ul>
            </div>

            <div className="mt-[50px] md:mt-[0px]">
              <h1 className=" font-[600] text-[#181A2A] text-[18px] mb-[20px] ">
                {" "}
                Category{" "}
              </h1>
              <ul className="text-[#696A75] font-[400] text-[16px] space-y-[10px] ">
                <li> Lifestyle</li>
                <li> Technology</li>
                <li> Travel</li>
                <li> Business</li>
                <li> Economy</li>
                <li> Sports</li>
              </ul>
            </div>
          </div>

          <div className="bg-white my-[45px] lg:my-[0px] flex flex-col max-w-[390px] py-[50px] justify-center lg:m-auto max-h-[250px] px-[35px] rounded-[12px] ">
            <h1 className="text-[#181A2A] text-center text-[20px] mb-[5px] font-[600] ">
              Weekly Newsletter
            </h1>
            <p className=" text-[#696A75] mb-[25px] text-[16px] font-[400] ">
              {" "}
              Get blog articles and offers via email{" "}
            </p>

            <div className="relative flex">
              <input
                id="email"
                className="border pl-[10px] pr-[32px] text-[#A1A1AA] w-full outline-none p-[11px] rounded-[6px]   "
                type="email"
                placeholder="Your Email"
              />
              <label htmlFor="email">
                <div className="absolute pt-[4px] right-3 top-[10px] cursor-pointer max-w-[20px] ">
                  {" "}
                  <img className="w-full" src={mail} alt="box-icon" />{" "}
                </div>
              </label>
            </div>
            <button className="w-full bg-[#4B6BFB] active:opacity-[0.8]  rounded-[6px] text-white py-[12px] my-[12px] ">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex justify-between max-w-[1300px] px-[20px]  md:flex-row flex-col m-auto ">
          <div className=" flex mt-[40px] ">
            <div className="max-w-[45px] mt-[3px] mr-[10px] ">
              {" "}
              <img className="w-full" src={logo} alt="logo" />{" "}
            </div>
            <div className="flex flex-col">
              <p className="text-[20px] text-[#141624] ">
                {" "}
                Meta <span className="font-[800] ml-[-5px]"> Blog </span>{" "}
              </p>
              <p className="text-[16px] text-[#3B3C4A] mt-[-5px]  ">
                {" "}
                © JS Template {year}. All Rights Reserved.{" "}
              </p>
            </div>
          </div>

          <div className="flex text-[#3B3C4A] text-[16px] gap-x-[14px] mt-[10px] md:mt-[65px] items-center ">
            <div> Terms of Use </div>
            <div className="border-x-[1px] px-[17px] "> Privacy Policy </div>
            <div> Cookie Policy </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
