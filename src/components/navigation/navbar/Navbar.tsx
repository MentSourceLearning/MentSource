import { Link } from "react-router-dom";
import { navItems } from "../navItems";
import SubNav from "./SubNav";
import { ArrowRight } from "../../../assets/svg";
import { NavLink } from "react-router-dom";

interface ArrowRightProps {
  classname?: string;
  text: string;
}
const Navbar = () => {
  const { resources, community } = navItems[0];
  const hoverStyles =
    "hover:bg-gray-100 rounded-2xl py-1 sm:px-4  transition duration-100 cursor-pointer";
  return (
    <section className="bg-white fixed top-0 w-full border-b z-30">

      <nav className="flex justify-between items-center gap-0 px-8  mx-auto py-4 block sm:hidden">

        <Link to="/">
          <p className="text-2xl font-bold text-black">MentSource</p>
        </Link> 
        
        <button className="block sm:hidden">☰ Menu</button>
      </nav>
      <nav className="flex items-center gap-0 px-8 max-w-[1600px] mx-auto py-4 hidden sm:block">
        <div className="flex items-center justify-between gap-0">
        <Link to="/">
          <p className="text-2xl font-bold text-black">MentSource</p>
        </Link>
        <div className="flex items-center gap-0">
         <NavLink to="/">
            <p className={hoverStyles}>Home</p>
          </NavLink>
          <NavLink to="/about">
            <p className={hoverStyles}>About Us</p>
          </NavLink>
          <div className="relative group">
              <p className={hoverStyles}>Resources</p>
            <SubNav items={resources} />
          </div>
          <NavLink to="/projects">
            <p className={hoverStyles}>Projects</p>
          </NavLink>
          <div className="relative group">
              <p className={hoverStyles}>Community</p>
            <SubNav items={community} />
          </div>
          <NavLink to="/events">
            <p className={hoverStyles}>Events</p>
          </NavLink>
          <JoinUs classname="hidden" text="Donate" />
        </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
export const JoinUs = ({ classname, text }: ArrowRightProps) => {
  return (
    <div className="w-fit bg-[#D9432C] text-white rounded-2xl py-1 px-4 cursor-pointer hover:bg-[#EE624D] transition duration-300 flex items-center gap-2">
      <p>{text}</p>
      <ArrowRight className={classname} />
    </div>
  );
};
