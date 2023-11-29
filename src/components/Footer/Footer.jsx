import heart from "../../assets/icon/ph_heart-fill.svg";
import { useLocation } from "react-router-dom";
import { footerUp } from "../../assets";

const Footer = () => {
  const location = useLocation();
  // const isHome = location.pathname === "/home";
  const isProject = location.pathname === "/project/1";
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };
  return (
    <div
      className={`w-full flex justify-between items-center h-[185px] p-3 ${
        isProject ? "bg-[#FAFAFA]" : "bg-white"
      }`}
    >
      <div className="w-full flex justify-between items-center lg:max-w-7xl mx-auto">
        <div className="flex justify-center items-center gap-2">
          <p>Designed with </p>
          <img src={heart} alt="heart" />
          <p>by Dhabs</p>
        </div>
        <button
          className="flex justify-center items-center gap-2"
          onClick={scrollToTop}
        >
          <p className="text-justify font-montalternates font-normal leading-[164%] text-[16px] text-[#161515]">
            Return to top
          </p>
          <img src={footerUp} alt="footerUp" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
