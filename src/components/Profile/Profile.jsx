import React from "react";

const Profile = () => {
  return (
    <div className="bg-black lg:h-[533px] py-10 lg:py-0 flex justify-center items-center">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center lg:py-10 lg:max-w-7xl mx-auto p-3">
        <div className="w-full lg:w-[500px]">
          <h2 className="text-[64px] lg:text-[96px] font-Lekton font-semibold leading-[92.9%] text-[#FFF]">
            I create experiences
          </h2>
          <p className="text-[#C4C4C4] text-[15px] lg:text-[20px] leading-none my-4 font-montalternates ">
            As a digital product designer, I've worked with clients to create
            products and services that help them connect with their target
            audience.
          </p>
        </div>
        <div className="w-full lg:w-[271px] flex justify-start lg:justify-end items-start lg:items-end">
          <button className="text-[#161515] font-montalternates bg-white w-[271px] h-[66px] font-semibold text-[18px] rounded-full">
            View my profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
