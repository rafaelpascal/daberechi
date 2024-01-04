import dabIntro from "../../assets/image/dabintro.png";

const Intro = () => {
  return (
    <div id="home">
      <div className="flex flex-col sm:flex-row justify-between items-center py-10 lg:max-w-7xl mx-auto">
        <div className="mb-[26px] lg:mb-0 w-[333px] lg:w-[50%]">
          <p className="text-black font-Freehand text-[32px] lg:text-[48px] leading-none font-normal justify-normal">
            Hi, my name is
          </p>
          <h2 className="text-[#3F3F3E] lg:text-black font-Lekton text-[64px] lg:text-[128px] leading-none font-bold justify-normal">
            Uzoh Daberechi
          </h2>
          <p className="text-[#828282] font-montalternates text-[16px] lg:text-[24px] leading-none font-semibold justify-normal">
            Pronounced /Dah. bay. ray. chi/
          </p>
        </div>
        <div>
          <img src={dabIntro} alt="Dabs" className="px-4 lg:px-0" />
          <p className="text-[15px] lg:text-[21px] text-[#4F4F4F] font-montalternates font-normal leading-none w-full lg:w-[497px] px-4 lg:px-0 my-[24px]">
            I'm a product designer who can add value to any team and help drive
            their product and design to the next level through thoughtfulness
            and innovation.
          </p>
          <ul className="flex lg:justify-start justify-center gap-4 lg:gap-8 items-center w-full lg:w-[497px]">
            <li className="border border-[#636262] rounded-full h-[48px] w-[100px] flex justify-center items-center">
              <a href="">LinkedIn</a>
            </li>
            <li className="border border-[#636262] rounded-full h-[48px] w-[100px] flex justify-center items-center">
              <a href="">Twitter</a>
            </li>
            <li className="border border-[#636262] rounded-full h-[48px] w-[100px] flex justify-center items-center">
              <a href="">Behance</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Intro;
