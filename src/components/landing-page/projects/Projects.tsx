import { JoinUs } from "../../navigation/navbar/Navbar";
import { ProjectItems } from "./project";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <main
      id="projects"
      //  className="pt-10 pb-4 max-w-[1400px] mx-auto border-b bg-[#F5F8FE] rounded-xl px-8">
       className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 place-items-center pt-10 pb-4 mt-0 max-w-[1800px] mx-auto border-b bg-[#F5F8FE] rounded-xl">
      {/* className="py-20 mt-20 max-w-[1024px] mx-auto border-b bg-[#F5F8FE] px-6 grid grid-cols-2 gap-3 rounded-x */}
      
      <div className="flex flex-col gap-3 ml-8">
        <h1 className="text-[#022DA4] font-medium text-2xl mb-4">Projects</h1>
         {/* #022DA4 */}
        <p className="font-medium text-2xl max-w-[500px]">
          Driving Innovation, One Solution at a Time
        </p>
        <p className="text-gray-600 mb-4 max-w-300px]">
          Whether you're starting fresh or revamping an existing project, our
          tools streamline the process, empowering creativity and
          collaboration.
        </p>
        <Link to="https://github.com/orgs/NICUB-Open-Source-Community/repositories">
          <div className="w-fit bg-[#022DA4] text-[#B2BCD9] rounded-2xl py-1 px-4 cursor-pointer hover:bg-[#9BADC9] transition duration-300 flex items-center gap-2">
            <p>Become a Contributor</p>
          </div>
        </Link>
      </div>
     
      <div className="flex flex-col gap-3 min-w-[500px]">
        {ProjectItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center p-4 pr-6 gap-3 rounded-lg ${
              idx % 2 !== 0 ? "bg-[#022DA4]" : "bg-white"
            }`}
          >
            <item.icon className="text-[#D9432C] text-4xl" />
            <div className="w-full">
              <div className="flex gap-20 items-center justify-between">
                <h1 className={`text-xl font-medium ${
                  idx % 2 !== 0 ? "text-[#B2BCD9]" : "text-[#022DA4]"
                }`}>
                  {item.heading}
                </h1>
                <p
                  className={`before:content-[''] before:w-[6px] before:h-[6px] before:absolute before:top-[8px] before:left-[-15px] before:rounded-full relative before:bg-[#D9432C]  text-sm ${
                    idx % 2 !== 0 ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  {item.languages}
                </p>
              </div>
              <p
                className={`${
                  idx % 2 !== 0 ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
