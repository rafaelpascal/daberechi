import React from "react";
import { meabout, blueBg, pinkBg, yelloBg } from "../../assets";
import { profiles } from "../../constants";
import { Sendmail } from "../../components";

const Aboutme = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center p-3">
        {/* <img src={yelloBg} alt="yelloBg" className="absolute top-[rem] z-0" /> */}
        {/* <img
          src={blueBg}
          alt="blueBg"
          className="absolute top-[20rem] left-0 z-0"
        />
        <img
          src={pinkBg}
          alt="pinkBg"
          className="absolute top-[10rem] right-0 z-0"
        /> */}
        <div className="lg:max-w-7xl mx-auto">
          <img src={meabout} alt="meabout" className="w-auto" />
          <div className="w-full lg:w-[1178px] mt-[5rem]">
            <p className="text-[48px] font-Freehand text-[#3F3F3E] leading-[161.4%] mb-8 text-justify">
              Hello there,
            </p>
            <p className="text-[20px] font-montalternates text-[#161515] leading-[161.4%] mb-8 text-justify">
              I started out as a graphics designer and I am always on the
              lookout for the small details that can take a product from good to
              great. With a keen eye for design, I strive to create beautiful
              and functional user experiences that delight users.
            </p>
            <p className="text-[20px] font-montalternates text-[#161515] leading-[161.4%] mb-8 text-justify">
              Gaining experiences from startups in various industries, ranging
              from education to finance and marketing. What sets me apart is my
              ability to communicate effectively with team members and
              stakeholders. I understand the importance of collaboration and am
              always eager to hear feedback and incorporate it into my designs.
              To further hone my skills, I enrolled for a coding cohort, to
              enable me to better understand the technical aspects of product
              design and to create more effective solutions. This experience has
              allowed me to design products that not only look great but also
              function flawlessly.
            </p>
            <p className="text-[20px] font-montalternates text-[#161515] leading-[161.4%] mb-8 text-justify">
              I try to make my design process fast and flexible to create
              impactful user experience and I'm grateful to have had the
              privilege of being a part of several projects.
            </p>
            <p className="text-[20px] font-montalternates text-[#161515] leading-[161.4%] mb-8 text-justify">
              Finally, my passion for product design, attention to detail, and
              willingness to learn and grow makes me a valuable asset to any
              team looking to create outstanding products.
            </p>
            <p className="text-[20px] font-montalternates text-[#161515] leading-[161.4%] mb-8 text-justify">
              Well, when I am not designing, I also enjoy skating, and playing
              football! I love making and listening to good music too.
            </p>
          </div>
          <div className="w-full lg:w-[1185px] mt-[64px] lg:mt-[158px]">
            <h2 className="text-[#161515] font-Lekton text-[44px] lg:text-[96px] leading-[106.9%] lg:leading-[92.9%]">
              Helping startups and business transform and Innovate
            </h2>
            <div className="mt-[20px] lg:mt-[73px]">
              {profiles.map((profile) => (
                <div
                  key={profile.id}
                  className="flex justify-between items-center h-[93px]"
                >
                  <p className="text-[#161515] font-montalternates text-[20px] font-semibold leading-[161.4%]">
                    {profile.name}
                  </p>
                  <p className="text-[#868686] font-montalternates text-[20px] font-normal leading-[161.4%]">
                    {profile.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-[64px] lg:mt-[160px]">
            <Sendmail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
