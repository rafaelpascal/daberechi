import dabsabout from "../../assets/image/dababout.png";
import dabsabout2 from "../../assets/image/dababout2.png";
import { FaArrowRightLong } from "react-icons/fa6";
const Aboutme = () => {
  return (
    <div
      id="aboutme"
      className="w-full flex flex-col sm:flex-row justify-between items-center py-10 lg:py-[10rem] lg:max-w-7xl mx-auto px-3"
    >
      <div className="w-full lg:w-[446px] relative flex justify-end items-end">
        <img src={dabsabout} alt="dabsabout" className="w-[392px]" />
        <img
          src={dabsabout2}
          alt="dabsabout2"
          className="absolute bottom-[-40px] w-[275px] right-[-60px] hidden lg:block"
        />
      </div>
      <div className="w-full mt-8 lg:mt-0 lg:w-[446px]">
        <h2 className="text-[64px] lg:text-[96px] mb-2 font-Lekton font-semibold leading-[92.9%] text-[#161515]">
          About Me
        </h2>
        <p className="text-[15px] lg:text-[18px] font-montalternates font-semibold leading-[161.4%] text-[#4F4F4F] text-justify">
          I started out as a graphics designer and I am always on the lookout
          for the small details that can take a product from good to great. With
          a keen eye for design, I strive to create beautiful and functional
          user experiences that delight users..
        </p>
        <p className="text-[15px] lg:text-[18px] font-montalternates font-semibold mt-4 leading-[161.4%] text-[#4F4F4F] text-justify">
          Gaining experiences from startups in various industries, ranging from
          education to finance and marketing. What sets me apart is my ability
          to communicate effectively with team members and stakeholders. I
          understand the importance of collaboration and am always eager to hear
          feedback and incorporate it into my designs. To further hone my...
        </p>
        <button className="text-[#1A73E8] text-[15px] lg:text-[20px] font-montalternates font-semibold leading-[161.4%] flex gap-3 justify-between mt-4 hover:text-[#5186cd] items-center">
          <p>Continue Reading</p>
          <FaArrowRightLong className="transition-transform transform inline-block hover:translate-x-2" />
        </button>
      </div>
    </div>
  );
};

export default Aboutme;
