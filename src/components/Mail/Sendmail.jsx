import mailIcon from "../../assets/icon/majesticons_mail-line.svg";

const Sendmail = () => {
  return (
    <div className="w-[349px] lg:w-[1187px] bg-[#F0F0F0] lg:bg-white border-2 mb-8 lg:border-4 rounded-[169px] lg:rounded-full h-[369px] lg:h-[278px] shadow-xl border-[#000] flex flex-col sm:flex-row justify-center gap-6 items-center lg:max-w-7xl mx-auto p-3">
      <div>
        <h2 className="text-[#161515] font-Lekton text-[29px] lg:text-[48px] ml-4 leading-[106.9%] text-left font-bold lg:leading-[92.9%] w-[297px] lg:w-[487px]">
          I'm open to connecting and collaborating on impactful projects.
        </h2>
      </div>
      <div>
        <button className="rounded-full w-[271px] h-[69px] bg-black text-white flex justify-center gap-4 items-center">
          <img src={mailIcon} alt="mailIcon" />
          shoot me a mail
        </button>
      </div>
    </div>
  );
};

export default Sendmail;
