import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import logo from "../assets/Logo.png";
import lightMode from "../assets/lightMode.png";
import { toggleTheme } from "../redux/themeSlice.js";
import { useSelector, useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const { theme } = useSelector((state) => state.theme);

  const toggle = () => {
    setVisible(!visible);
  };
  const themeMode = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <div className=" fixed w-full z-[100] bg-white  ">
        <div className="flex justify-between max-w-[1300px] m-auto py-[12px] items-center pr-[60px] md:pr-[20px] px-[20px] sm:py-[15px] ">
          <div className="max-w-[140px]  cursor-pointer ">
            <img className="w-full" src={logo} alt="logo" />
          </div>

          <div className="hidden md:flex gap-x-[25px] font-[400] text-[16px]  text-[#3B3C4A] text-center ">
            <NavLink
              className="hover:bg-[#4B6BFB] hover:text-white px-[12px]  py-[3px] hover:rounded-[6px] active:opacity-[0.8] "
              to="/"
            >
              <div className=" ">Home</div>
            </NavLink>

            <NavLink
              className="hover:bg-[#4B6BFB] hover:text-white px-[12px]  py-[3px] hover:rounded-[6px] active:opacity-[0.8] "
              to="/blog"
            >
              <div className=" ">Blog</div>
            </NavLink>

            <NavLink
              className="hover:bg-[#4B6BFB] hover:text-white px-[12px]  py-[3px] hover:rounded-[6px] active:opacity-[0.8] "
              to="/single-post"
            >
              <div className=" ">Single Post</div>
            </NavLink>

            <NavLink
              className="hover:bg-[#4B6BFB] hover:text-white px-[12px]  py-[3px] hover:rounded-[6px] active:opacity-[0.8] "
              to="/pages"
            >
              <div className=" ">Pages</div>
            </NavLink>

            <NavLink
              className="hover:bg-[#4B6BFB] hover:text-white px-[12px]  py-[3px] hover:rounded-[6px] active:opacity-[0.8] "
              to="/contact"
            >
              <div className=" ">Contact</div>
            </NavLink>
          </div>

          <div>
            <div className="flex">
              <div className="relative hidden lg:flex">
                <input
                  id="input"
                  className="bg-[#F4F4F5] pl-[15px] pr-[30px] text-[#A1A1AA] max-w-[160px] outline-none p-[6px] rounded-[5px]   "
                  type="text"
                  placeholder="Search"
                />
                <label htmlFor="input">
                  <FaSearch className="absolute text-[#52525B] opacity-[0.7] font[300] right-3 top-[10px] cursor-pointer " />
                </label>
              </div>
              <div className=" ml-[35px] md:pr-[25px] pr-[20px] bg-[#E8E8EA] items-center rounded-full hidden md:flex ">
                <div
                  className="md:max-w-[34px] max-w-[27px] pt-[2px] "
                  onClick={themeMode}
                >
                  {" "}
                  {theme === "light" ? (
                    <img
                      className="w-full cursor-pointer"
                      src={lightMode}
                      alt="lightMode"
                    />
                  ) : (
                    <FaMoon className="w-[30px] mb-[3px] ml-[26px] h-[30px] rounded-[50%] cursor-pointer bg-white " />
                  )}{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}

      <div className=" fixed w-full z-[100] md:hidden">
        <div className=" flex justify-end text-center pr-[20px] py-[12px] ">
        <div className=" ml-[35px]  pr-[20px] bg-[#E8E8EA] mr-[20px] md:hidden flex items-center rounded-full ">
                <div
                  className=" max-w-[27px] pt-[2px] "
                  onClick={themeMode}
                >
                  {" "}
                  {theme === "light" ? (
                    <img
                      className="w-full cursor-pointer"
                      src={lightMode}
                      alt="lightMode"
                    />
                  ) : (
                    <FaMoon className="w-[22px] mb-[2px] ml-[23px] h-[22px] rounded-[50%] cursor-pointer bg-white " />
                  )}{" "}
                </div>
              </div>
          <div className=" ">
            <div className=" flex item-center mt-[3px] sm:mt-[6px]  ">
              {!visible ? (
                <img
                  className="max-w-[30px] cursor-pointer"
                  src={menu}
                  onClick={toggle}
                />
              ) : (
                <>
                  <div className="absolute text-center text-lg h-screen w-screen z-[100] top-0 left-0 bg-black text-white opacity-80 pt-[20%]  ">
                    <div>
                      <img
                        onClick={toggle}
                        className=" mx-auto cursor-pointer"
                        src={close}
                      />
                    </div>
                    <NavLink to="/">
                      <div onClick={toggle} className="mt-[20px] ">
                        Home
                      </div>
                    </NavLink>

                    <NavLink to="/blog">
                      <div onClick={toggle} className="mt-[30px] ">
                        Blog{" "}
                      </div>
                    </NavLink>

                    <NavLink to="/single-post">
                      <div onClick={toggle} className="mt-[30px] ">
                        Single Post
                      </div>
                    </NavLink>

                    <NavLink to="/pages">
                      <div onClick={toggle} className="mt-[30px] ">
                        Pages
                      </div>
                    </NavLink>

                    <NavLink to="/contact">
                      <div onClick={toggle} className="mt-[30px] ">
                        {" "}
                        Contact{" "}
                      </div>
                    </NavLink>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
