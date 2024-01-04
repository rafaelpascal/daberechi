import React, { useState, useEffect } from "react";
import logo from "../../assets/icon/logo.svg";
import online from "../../assets/icon/open.svg";
import buttonBar from "../../assets/icon/eva_menu-2-fill.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("/");
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname;
  const homeClass =
    currentPath === "/" ? "bg-black text-white rounded-full px-5 py-4" : "";
  const workClass =
    currentPath === "/work" ||
    currentPath === "/project/1" ||
    currentPath === "/project/2"
      ? "bg-black text-white rounded-full px-5 py-4"
      : "";
  const aboutClass =
    currentPath === "/aboutme"
      ? "bg-black text-white rounded-full px-5 py-4"
      : "";
  const resumeClass =
    currentPath === "/resume"
      ? "bg-black text-white rounded-full px-5 py-4"
      : "";

  const smhomeClass = currentPath === "/home" ? "text-black" : "";
  const smworkClass = currentPath === "/work" ? "text-black" : "";
  const smaboutClass = currentPath === "/aboutme" ? "text-black" : "";
  const smresumeClass = currentPath === "/resume" ? "text-black" : "";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFixed(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <header
      className={`w-full h-[104px] flex justify-center items-center transition-transform duration-500 transform ${
        isFixed ? "backdrop-filter backdrop-blur-xl fixed z-20" : ""
      }`}
    >
      <div
        className={`w-full h-[104px] flex justify-between items-center lg:py-10 lg:max-w-7xl mx-auto p-3`}
      >
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="w-[36px]" />
        </Link>
        <div className="block sm:hidden">
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex justify-center items-center w-full px-4 py-2 border border-transparent rounded-md focus:outline-none"
          >
            <img src={buttonBar} alt="Button" />
          </button>
          {isDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                className="p-3"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdownButton"
              >
                <ul className="flex flex-col justify-between items-start w-full">
                  <li className="py-4">
                    <Link
                      to={"/"}
                      onClick={() => setActiveNav("/")}
                      className={`text-[#898F99] text-[16px] font-bold font-montalternates ${smhomeClass}`}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to={"/aboutme"}
                      onClick={() => setActiveNav("/aboutme")}
                      className={`text-[#898F99] text-[16px] font-bold font-montalternates ${smaboutClass}`}
                    >
                      About me
                    </Link>
                  </li>
                  <li className="py-4">
                    <Link
                      to={"/work"}
                      onClick={() => setActiveNav("/work")}
                      className={`text-[#898F99] text-[16px] font-bold font-montalternates ${smworkClass}`}
                    >
                      Works
                    </Link>
                  </li>
                  <li className="pb-4">
                    <Link
                      to={"/resume"}
                      onClick={() => setActiveNav("/resume")}
                      className={`text-[#898F99] text-[16px] font-bold font-montalternates ${smresumeClass}`}
                    >
                      Resume
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="hidden sm:block">
          <div className="bg-[#EEEEEE99] w-[494px] backdrop-filter backdrop-blur-md h-[66px] flex justify-center items-center px-2 rounded-full">
            <ul className="flex justify-between items-center w-full">
              <li>
                <Link
                  to={"/"}
                  onClick={() => {
                    setActiveNav("/");
                    window.scrollTo(0, 0);
                  }}
                  className={`text-[#898F99] text-[16px] font-montalternates ${homeClass}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  // href="#aboutme"
                  to={"/aboutme"}
                  onClick={() => {
                    setActiveNav("/aboutme");
                  }}
                  className={`text-[#898F99] text-[16px] font-montalternates ${aboutClass}`}
                >
                  About me
                </Link>
              </li>
              <li>
                <Link
                  to={"/work"}
                  onClick={() => setActiveNav("/work")}
                  className={`text-[#898F99] text-[16px] font-montalternates ${workClass}`}
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  to={"/resume"}
                  onClick={() => setActiveNav("/resume")}
                  className={`text-[#898F99] text-[16px] font-montalternates ${resumeClass}`}
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex justify-center items-center gap-4">
            <img src={online} alt="" />
            <p className="text-[#161515] text-[14px] font-montalternates">
              Open to new roles
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
