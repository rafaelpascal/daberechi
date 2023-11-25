import React, { useState, useEffect } from "react";
import logo from "../../assets/icon/logo.svg";
import online from "../../assets/icon/open.svg";
import buttonBar from "../../assets/icon/eva_menu-2-fill.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("/home");
  const [isFixed, setIsFixed] = useState(false);

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
      className={`w-full h-[104px] flex justify-center items-center p-3 transition-transform duration-500 transform ${
        isFixed ? "backdrop-filter backdrop-blur-xl fixed z-10" : ""
      }`}
    >
      <div className="w-full h-[104px] flex justify-between items-center lg:py-10 lg:max-w-7xl mx-auto p-3">
        <div>
          <img src={logo} alt="Logo" className="w-[36px]" />
        </div>
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
                  <li className="text-[#898F99] text-[16px] font-montalternates py-2">
                    <a href="#">Home</a>
                  </li>
                  <li className="text-[#898F99] text-[16px] font-montalternates py-2">
                    <a href="#">About me</a>
                  </li>
                  <li className="text-[#898F99] text-[16px] font-montalternates py-2">
                    <a href="#">Works</a>
                  </li>
                  <li className="text-[#898F99] text-[16px] font-montalternates py-2">
                    <a href="#">Resume</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="hidden sm:block">
          <div className="bg-[#EEEEEE99] w-[494px] backdrop-filter backdrop-blur-md h-[66px] flex justify-center items-center px-2 rounded-full">
            <ul className="flex justify-between items-center w-full">
              <li
                onClick={() => setActiveNav("/home")}
                className="text-[#898F99] text-[16px] font-montalternates"
              >
                <Link
                  to={"/home"}
                  className={
                    activeNav === "/home"
                      ? "bg-black text-white rounded-full px-5 py-4"
                      : ""
                  }
                >
                  Home
                </Link>
              </li>
              <li
                onClick={() => setActiveNav("/aboutme")}
                className="text-[#898F99] text-[16px] font-montalternates"
              >
                <Link
                  to={"/aboutme"}
                  className={
                    activeNav === "/aboutme"
                      ? "bg-black text-white rounded-full px-5 py-4"
                      : ""
                  }
                >
                  About me
                </Link>
              </li>
              <li
                onClick={() => setActiveNav("/work")}
                className="text-[#898F99] text-[16px] font-montalternates"
              >
                <Link
                  to={"/work"}
                  className={
                    activeNav === "/work" || activeNav === "/project"
                      ? "bg-black text-white rounded-full px-5 py-4"
                      : ""
                  }
                >
                  Works
                </Link>
              </li>
              <li className="text-[#898F99] text-[16px] font-montalternates">
                <a
                  href="#resume"
                  onClick={() => setActiveNav("#resume")}
                  className={
                    activeNav === "#resume"
                      ? "bg-black text-white rounded-full px-5 py-4"
                      : ""
                  }
                >
                  Resume
                </a>
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
