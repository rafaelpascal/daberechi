import { useParams } from "react-router-dom";
import { projects } from "../../constants";
import arrowUp from "../../assets/icon/material-symbols_arrow-insert.svg";
import { instagram, twitter, arrowLeft } from "../../assets";
import { Link } from "react-router-dom";
const Project = () => {
  const { id } = useParams();
  const foundObject = projects.find((project) => project.id == id);
  return (
    <div className="bg-[#FAFAFA] py-8 lg:py-[92.5px]">
      <Link
        to={"/work"}
        className="flex justify-start items-start max lg:max-w-7xl mx-auto"
      >
        <div className="flex justify-center items-center gap-2">
          <img src={arrowLeft} alt="arrowLeft" />
          <p className="text-justify font-montalternates font-semibold leading-[164%] text-[18px] lg:text-[20px] text-[#1A73E8]">
            Go Back
          </p>
        </div>
      </Link>
      <div className="w-full flex flex-col justify-center items-center lg:py-10 mx-auto p-3">
        {id == "1" ? (
          <>
            <div className="flex justify-between items-center gap-4 w-full max lg:max-w-7xl mx-auto mb-4 lg:mb-[129px]">
              <h2 className="text-[#161515] font-montalternates text-[22px] lg:text-[48px] font-semibold leading-[164%]">
                {foundObject.name}
              </h2>
              <button className="border-2 w-[#186px] h-[53px] p-[10px] border-[#161515] shadow-xl rounded-full flex justify-center items-center">
                <p className="underline">View Project</p>
                <img src={arrowUp} alt="arrowUp" />
              </button>
            </div>
            <div className="flex justify-between items-center gap-4 w-full max lg:max-w-7xl mx-auto mb-[29px]">
              <div>
                <p className="text-[12px] lg:text-[14px] font-montalternates font-normal text-[#161515]">
                  Client
                </p>
                <p className="text-[12px] lg:text-[14px] font-montalternates font-normal text-[#161515]">
                  {foundObject.client}
                </p>
              </div>
              <div>
                <p className="text-[12px] lg:text-[14px] font-montalternates font-normal text-[#161515]">
                  Project Type
                </p>
                <p className="text-[12px] lg:text-[14px] font-montalternates font-normal text-[#161515]">
                  {foundObject.type}
                </p>
              </div>
              <div>
                <p className="text-[12px] lg:text-[14px] font-montalternates font-normal text-[#161515]">
                  Duration
                </p>
                <p className="text-[12px] lg:text-[14px] font-montalternates font-normal text-[#161515]">
                  {foundObject.duration}
                </p>
              </div>
              <div>
                <p className="text-[12px] lg:text-[14px] font-montalternates font-normal text-[#161515]">
                  Year
                </p>
                <p className="text-[12px] lg:text-[14px] font-montalternates font-normal text-[#161515]">
                  {foundObject.year}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center gap-4 w-full max lg:max-w-7xl mx-auto mb-[129px]">
              <img src={foundObject.img} alt="" className="w-full" />
              <div className="mt-4 lg:mt-[98px]">
                <h2 className="font-montalternates text-[26px] lg:text-[36px] text-[#161515] text-left lg:text-justify leading-[164%] font-bold">
                  Introduction
                </h2>
                <p className="font-montalternates text-[18px] text-[#161515] text-justify leading-[164%] font-normal">
                  {foundObject.introduction}
                </p>
              </div>
              <div className="mt-[48px]">
                <h2 className="font-montalternates text-[26px] lg:text-[36px] text-[#161515] text-left lg:text-justify leading-[164%] font-bold">
                  Understanding the Challenge
                </h2>
                <p className="font-montalternates text-[18px] text-[#161515] text-justify leading-[164%] font-normal">
                  {foundObject.challenge}
                </p>
              </div>
              <div className="mt-[48px]">
                <p className="font-montalternates text-[18px] text-[#1A73E8] italic text-justify leading-[164%] font-normal">
                  Due to the urgency of the project as stated by the
                  stakeholders, the timeline slated for this project was 3
                  months, so that we could meet up with the launch date. Of
                  course we said it was not feasible but we were able to launch
                  during the third month but still continued adding additional
                  features which amounted to a total of 6 months.
                </p>
              </div>
              <div className="mt-[48px]">
                <img src={foundObject.imgSecond} alt="" />
              </div>
              <div className="mt-[80px]">
                <h2 className="font-montalternates text-[26px] lg:text-[36px] text-[#161515] text-left lg:text-justify leading-[164%] font-bold">
                  Defining Objectives:
                </h2>
                <p className="font-montalternates text-[18px] mb-2 text-[#161515] text-justify leading-[164%] font-normal">
                  The design team consisting of myself and another designer,
                  formulated specific objectives to guide the design process:
                </p>
                <ol className="list-decimal pl-4" type="1">
                  <li className="font-montalternates text-[18px] mb-2 text-[#161515] text-justify leading-[164%] font-normal">
                    Streamline Verification: Simplify the verification process
                    for citizens, reducing the number of steps and documentation
                    required.
                  </li>
                  <li className="font-montalternates text-[18px] mb-2 text-[#161515] text-justify leading-[164%] font-normal">
                    Enhance Security: Implement robust security measures to
                    safeguard sensitive citizen data and prevent unauthorized
                    access.
                  </li>
                  <li className="font-montalternates text-[18px] mb-2 text-[#161515] text-justify leading-[164%] font-normal">
                    Foster Transparency: Provide real-time status updates and
                    clear instructions to citizens to enhance transparency
                    throughout the verification journey.
                  </li>
                  <li className="font-montalternates text-[18px] mb-2 text-[#161515] text-justify leading-[164%] font-normal">
                    Empower Administrators: Offer an intuitive and efficient
                    interface for government officials to manage verification
                    requests and track progress.
                  </li>
                </ol>
              </div>
              <div className="mt-[48px]">
                <h2 className="font-montalternates text-[26px] lg:text-[36px] text-[#161515] text-left lg:text-justify leading-[164%] font-bold">
                  Design Approach:
                </h2>
                <p className="font-montalternates text-[18px] text-[#161515] text-justify leading-[164%] font-normal">
                  {foundObject.approach}
                </p>
              </div>
              <div className="mt-[48px]">
                <img src={foundObject.imgthird} alt="" />
              </div>
              <div className="mt-[48px]">
                <p className="font-montalternates text-[18px] text-[#161515] text-justify leading-[164%] font-normal">
                  {foundObject.approach2}
                </p>
              </div>
              <div className="mt-[48px]">
                <h2 className="font-montalternates text-[26px] lg:text-[36px] text-[#161515] text-left lg:text-justify leading-[164%] font-bold">
                  Key Takeways
                </h2>
                <p className="font-montalternates text-[18px] text-[#161515] text-justify leading-[164%] font-normal">
                  {foundObject.takeaway}
                </p>
              </div>
              <div className="mt-[48px]">
                <h2 className="font-montalternates text-[26px] lg:text-[36px] text-[#161515] text-left lg:text-justify leading-[164%] font-bold">
                  Conclusion:
                </h2>
                <p className="font-montalternates text-[18px] text-[#161515] text-justify leading-[164%] font-normal">
                  {foundObject.conclusion}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center gap-4 w-full max lg:max-w-7xl mx-auto mb-4 lg:mb-[129px]">
              <h2 className="text-[#161515] font-montalternates text-[22px] lg:text-[48px]  font-semibold leading-[164%]">
                {foundObject.name}
              </h2>
              <button className="border-2 w-[#186px] h-[53px] p-[10px] border-[#161515] shadow-xl rounded-full flex justify-center items-center">
                <p className="underline">View Project</p>
                <img src={arrowUp} alt="arrowUp" />
              </button>
            </div>
            <div className="flex justify-between items-center gap-4 w-full max lg:max-w-7xl mx-auto mb-[29px]">
              <div>
                <p className="text-[12px] lg:text-[14px] font-montalternates font-normal text-[#161515]">
                  Client
                </p>
                <p className="text-[12px] lg:text-[14px] font-montalternates font-normal text-[#161515]">
                  {foundObject.client}
                </p>
              </div>
              <div>
                <p className="text-[12px] lg:text-[14px] font-montalternates font-normal text-[#161515]">
                  Project Type
                </p>
                <p className="text-[12px] lg:text-[14px] font-montalternates font-normal text-[#161515]">
                  {foundObject.type}
                </p>
              </div>
              <div>
                <p className="text-[12px] lg:text-[14px] font-montalternates font-normal text-[#161515]">
                  Duration
                </p>
                <p className="text-[12px] lg:text-[14px] font-montalternates font-normal text-[#161515]">
                  {foundObject.duration}
                </p>
              </div>
              <div>
                <p className="text-[12px] lg:text-[14px] font-montalternates font-normal text-[#161515]">
                  Year
                </p>
                <p className="text-[12px] lg:text-[14px] font-montalternates font-normal text-[#161515]">
                  {foundObject.year}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center gap-4 w-full max lg:max-w-7xl mx-auto mb-[129px]">
              <img src={foundObject.img} alt="" className="w-full" />
              <div className="mt-4 lg:mt-[98px]">
                <h2 className="font-montalternates text-[26px] lg:text-[36px] text-[#161515] text-left lg:text-justify leading-[164%] font-bold">
                  Product Overview
                </h2>
                <p className="font-montalternates text-[18px] text-[#161515] text-justify leading-[164%] font-normal">
                  {foundObject.overview}
                </p>
              </div>
              <div className="mt-[48px]">
                <h2 className="font-montalternates text-[26px] lg:text-[36px] text-[#161515] text-left lg:text-justify leading-[164%] font-bold">
                  Objective
                </h2>
                <p className="font-montalternates text-[18px] text-[#161515] text-justify leading-[164%] font-normal">
                  {foundObject.objective}
                </p>
              </div>
              <div className="mt-[48px]">
                <h2 className="font-montalternates text-[26px] lg:text-[36px] text-[#161515] text-left lg:text-justify leading-[164%] font-bold">
                  Employer & Employee Challenges
                </h2>
                <p className="font-montalternates text-[18px] text-[#161515] text-justify leading-[164%] font-normal">
                  {foundObject.challenge}
                </p>
              </div>
              <div className="mt-[48px]">
                <h2 className="font-montalternates text-[26px] lg:text-[36px] text-[#161515] text-left lg:text-justify leading-[164%] font-bold">
                  Comparing Existing Solutions
                </h2>
                <p className="font-montalternates text-[18px] text-[#161515] text-justify leading-[164%] font-normal">
                  {foundObject.solution}
                </p>
              </div>
              <div className="mt-[48px]">
                <img src={foundObject.imgSecond} alt="" />
              </div>
              <div className="mt-[48px]">
                <p className="font-montalternates text-[18px] text-[#161515] text-justify leading-[164%] font-normal">
                  {foundObject.solution2}
                </p>
              </div>
              <div className="mt-[80px]">
                <h2 className="font-montalternates text-[26px] lg:text-[36px] text-[#161515] text-left lg:text-justify leading-[164%] font-bold">
                  Design Solutions:
                </h2>
                <p className="font-montalternates text-[18px] mb-2 text-[#161515] text-justify leading-[164%] font-normal">
                  The design ideas adopted within Kontrack produced dramatic
                  effects that benefited both companies and employees:
                </p>
                <ul className="list-disc pl-4">
                  <li className="font-montalternates text-[18px] mb-2 text-[#161515] text-justify leading-[164%] font-normal">
                    <span className="font-semibold">
                      Increased communication and Collaboration:
                    </span>{" "}
                    The centralized communication hub facilitated increased
                    engagement between employers and employees, resulting in
                    clearer instructions, greater coordination, and a more
                    collaborative work environment overall.
                  </li>
                  <li className="font-montalternates text-[18px] mb-2 text-[#161515] text-justify leading-[164%] font-normal">
                    <span className="font-semibold">Empowered Employees: </span>{" "}
                    With features like real-time earnings tracking and shift
                    shifting, the employee dashboard gave employees more control
                    over their work life, leading to improved job satisfaction
                    and engagement.
                  </li>
                  <li className="font-montalternates text-[18px] mb-2 text-[#161515] text-justify leading-[164%] font-normal">
                    <span className="font-semibold">
                      Streamlined Payroll Processes:
                    </span>{" "}
                    Integrated payroll creation lowered the time and effort
                    necessary to handle payroll significantly. Employers
                    reported increased efficiency and a reduction in
                    payroll-related errors.
                  </li>
                  <li className="font-montalternates text-[18px] mb-2 text-[#161515] text-justify leading-[164%] font-normal">
                    <span className="font-semibold">Efficient Scheduling:</span>{" "}
                    The intelligent scheduling algorithms improved labor
                    management by ensuring that shifts were distributed equally
                    and employees' availability and preferences were taken into
                    account. This helped to a more equitable workplace.
                  </li>
                </ul>
              </div>
              <div className="mt-[48px]">
                <img src={foundObject.imgthird} alt="" />
              </div>
              <div className="mt-[48px]">
                <h2 className="font-montalternates text-[26px] lg:text-[36px] text-[#161515] text-left lg:text-justify leading-[164%] font-bold">
                  Key Takeaways & Conclusion
                </h2>
                <p className="font-montalternates text-[18px] text-[#161515] text-justify leading-[164%] font-normal">
                  {foundObject.conclusion}
                </p>
              </div>
            </div>
          </>
        )}

        <div className="w-full flex flex-col justify-center items-center lg:py-10 mx-auto p-3">
          <h2 className="text-justify font-montalternates font-bold leading-[164%] text-[24px] lg:text-[32px] text-[#161515]">
            Shoot me mail
          </h2>
          <h2 className="text-justify font-montalternates font-bold leading-[149.5%] text-[24px] lg:text-[48px] text-[#49BDAC]">
            uzohdaberechi@gmail.com
          </h2>
          <div className="w-full flex justify-center gap-4 items-center lg:py-10 mx-auto p-3">
            <a href="">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
