import { Link } from "react-router-dom";
import { projects } from "../../constants";

const Projects = ({ onButtonClick }) => {
  return (
    <div
      className="bg-gradient-to-br from-white via-blue-50
        to-pink-50"
    >
      <div className="w-full flex flex-col justify-center items-center pt-[2rem] p-3">
        <div className="flex flex-col sm:flex-row justify-between gap-8 w-full lg:max-w-7xl mx-auto p-3 items-center">
          <h2 className="text-[64px] lg:text-[96px] font-Lekton font-semibold leading-[92.9%] w-full lg:w-[500px]">
            I create experiences
          </h2>
          <p className="w-full lg:w-[492px] text-justify font-montalternates text-[16px] font-semibold">
            Currently designing at Appmart Integrated Ltd, Previously designer
            at IGHUB, worked with Gotahia, Shama, Kontrack and Ezly rent.
          </p>
        </div>
        <div>
          {projects.map((project) => (
            <div key={project.id}>
              <Link to={`/project/${project.id}`}>
                <img
                  src={project.img}
                  alt="AbiaOneId"
                  className="rounded-2xl mt-[30px] lg:mt-[131px]"
                />
              </Link>
              <div className="flex flex-col sm:flex-row justify-between items-start mt-4">
                <div>
                  <p>Project: {project.name}</p>
                  <p>Role: {project.role}</p>
                  <p>Year: {project.year}</p>
                </div>
                <div className="mt-8 lg:mt-0">
                  <p className="w-full lg:w-[486px] flex justify-end items-end">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full gap-10 lg:max-w-7xl mx-auto mt-[5rem] items-center">
          <div className="w-full lg:w-[313px] bg-[#F0F0F0] lg:bg-white border-2 lg:border-4 rounded-[90px] lg:rounded-[129px] h-[130px] lg:h-[141px] shadow-xl border-[#000] flex justify-center items-center lg:max-w-7xl mx-auto p-3">
            <div>
              <h2 className="text-[#161515] font-montalternates text-[26px] lg:text-[40px] text-center w-full lg:w-[191px]">
                Product Ideation.
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-[313px] bg-[#F0F0F0] lg:bg-white border-2 lg:border-4 rounded-[90px] lg:rounded-[129px] h-[130px] lg:h-[141px] shadow-xl border-[#000] flex justify-center items-center lg:max-w-7xl mx-auto p-3">
            <div>
              <h2 className="text-[#161515] font-montalternates text-[26px] lg:text-[40px] text-center w-full lg:w-[191px]">
                Product Design.
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-[313px] bg-[#F0F0F0] lg:bg-white border-2 lg:border-4 rounded-[90px] lg:rounded-[129px] h-[130px] lg:h-[141px] shadow-xl border-[#000] flex justify-center items-center lg:max-w-7xl mx-auto p-3">
            <div className="w-full pl-4">
              <h2 className="text-[#161515] font-montalternates text-[26px] lg:text-[40px] text-center w-full lg:w-[191px]">
                Interactive Prototyping.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
