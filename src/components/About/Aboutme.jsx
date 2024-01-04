import dabsabout from "../../assets/image/dababout.png";
import dabsabout2 from "../../assets/image/dababout2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { imgBack, imgBacksecond } from "../../assets";
import { Link } from "react-router-dom";

const Aboutme = () => {
  return (
    <div
      id="aboutme"
      className="w-full gap-6 flex flex-col sm:flex-row justify-between items-center py-10 lg:py-[10rem] lg:max-w-7xl mx-auto"
    >
      <div className="lg:w-[50%] w-full relative flex justify-center items-center mb-10 lg:justify-start lg:items-start px-2">
        {/* <img
          src={imgBack}
          alt=""
          className="absolute w-[366.012px] right-[0px] block lg:hidden"
        />
        <img
          src={imgBacksecond}
          alt=""
          className="absolute  w-[366.012px] right-[0px] z-0 block lg:hidden"
        /> */}
        <img
          src={dabsabout}
          alt="dabsabout"
          className="w-[250.028px] lg:w-[392px] h-[329.118px] lg:h-[516px] z-10"
        />
        <img
          src={dabsabout2}
          alt="dabsabout2"
          className="absolute bottom-[-20px] lg:bottom-[-40px] w-[175.402px] lg:w-[275px] h-[201.553px] lg:h-[316px] left-[160px] lg:left-[260px] z-10"
        />
      </div>
      <div className="lg:w-[50%] w-full mt-8 lg:mt-0">
        <h2 className="text-[44px] lg:text-[76px] w-[350px] lg:w-[446px] mb-2 ml-4 font-Lekton font-semibold leading-[92.9%] text-[#161515]">
          About Me
        </h2>
        <p className="text-[15px] lg:text-[18px] font-montalternates font-semibold leading-[161.4%] text-[#4F4F4F] text-justify pl-4 lg:pl-0 w-[350px] lg:w-[446px]">
          I started out as a graphics designer and I am always on the lookout
          for the small details that can take a product from good to great. With
          a keen eye for design, I strive to create beautiful and functional
          user experiences that delight users..
        </p>
        <p className="text-[15px] lg:text-[18px] font-montalternates font-semibold mt-4 leading-[161.4%] text-[#4F4F4F] pl-4 lg:pl-0 text-justify w-[350px] lg:w-[446px]">
          Gaining experiences from startups in various industries, ranging from
          education to finance and marketing. What sets me apart is my ability
          to communicate effectively with team members and stakeholders. I
          understand the importance of collaboration and am always eager to hear
          feedback and incorporate it into my designs. To further hone my...
        </p>
        <Link
          to={"/aboutme"}
          className="text-[#1A73E8] text-[15px] lg:text-[20px] pl-4 lg:pl-0 font-montalternates font-semibold leading-[161.4%] flex gap-3 justify-start mt-4 hover:text-[#5186cd] items-center"
        >
          <p>Continue Reading</p>
          <FaArrowRightLong className="transition-transform transform inline-block hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
};

export default Aboutme;
