import heart from "../../assets/icon/ph_heart-fill.svg";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/home";
  return (
    <div
      className={`w-full flex flex-col sm:flex-row justify-center items-center h-[185px] p-3 ${
        isHome ? "" : "bg-gradient-to-tr from-white via-blue-50  to-pink-50"
      }`}
    >
      <div className="flex justify-center items-center gap-2">
        <p>Designed with </p>
        <img src={heart} alt="heart" />
        <p>by Dhabs</p>
      </div>
    </div>
  );
};

export default Footer;
