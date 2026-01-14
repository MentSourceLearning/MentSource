// import { Link } from "react-router-dom";
import { JoinUs } from "../../navigation/navbar/Navbar";
// import { ArrowRight, Community } from "../../../assets/svg";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <main className=" bg-[url('/git-image-bg.png')] bg-[length:30%_auto] bg-no-repeat bg-[position:right_-20px] bg-[#022DA4] ">
      {/* bg-gray-900 */}
      {/* bg-[#022DA4] */}
      <div className="max-w-[1600px] mx-auto px-8 pt-4 pb-4">
        <div className="mb-6 flex items-center bg-gray-200 w-fit px-3 py-1 rounded-2xl text-sm hover:bg-gray-300 cursor-pointer">
          {/* <Link to="/dashboard">
            <p>Join the MentSource Community. Check it out</p>
          </Link>
          <ArrowRight /> */}
        </div>
        
        <div className="mb-1 text-2xl sm:text-4xl font-semibold h-[90px] text-[#B2BCD9] ml-10">
          Discover{" "}
          <span className="text-[#FF5B3E]">
            <Typewriter
              words={[
                "the future of open source",
                "the potential of community",
                "a world of collaboration",
                "how AI is shaping the future of Open Source",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </span>
        </div>
        <p className="mb-2 text-gray-300 max-w-[600px] text-sm md:text-md xl:text-xl ml-10">
        MentSource is an open-source community dedicated to empowering beginners
          and developers by equipping them with the skills they need to thrive
          in the tech industry.
        </p>
        <div className="mb-2 ml-10">
          <JoinUs classname="block" text="Join the Community" />
        </div>
        <div className="flex items-center gap-x-2 text-gray-300">
          {/* <Community className="text-[#01A7E1]" /> */}
          {/* <p>Reaching contributors worldwide and making an impact</p> */}
        </div>

        {/* <div className="border-[9px] border-gray-300 rounded-xl">
        <img src="./hero.gif" className="h-full w-full " alt="" />
      </div> */}
      </div>
    </main>
  );
};

export default HeroSection;
