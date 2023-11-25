import mailIcon from "../../assets/icon/majesticons_mail-line.svg";

const Sendmail = () => {
  return (
    <div className="w-full lg:w-[1187px] bg-[#F0F0F0] lg:bg-white border-2 lg:border-4 rounded-[90px] lg:rounded-full h-[369px] lg:h-[278px] shadow-xl border-[#000] flex flex-col sm:flex-row justify-center gap-6 items-center lg:max-w-7xl mx-auto p-3">
      <div>
        <h2 className="text-[#161515] font-montalternates text-[36px] lg:text-[48px] leading-[106.9%] text-center lg:leading-[92.9%] w-full lg:w-[487px]">
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
