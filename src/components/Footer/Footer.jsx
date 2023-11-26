import heart from "../../assets/icon/ph_heart-fill.svg";
import { useLocation } from "react-router-dom";
import { PiArrowUp } from "react-icons/pi";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };
  return (
    <div
      className={`w-full flex flex-col sm:flex-row justify-between items-center h-[185px] p-3 ${
        isHome ? "" : "bg-gradient-to-tr from-white via-blue-50  to-pink-50"
      }`}
    >
      <div className="flex justify-center items-center gap-2">
        <p>Designed with </p>
        <img src={heart} alt="heart" />
        <p>by Dhabs</p>
      </div>
      <button className="" onClick={scrollToTop}>
        <PiArrowUp className="text-[#000] text-[20px]" />
      </button>
    </div>
  );
};

export default Footer;
