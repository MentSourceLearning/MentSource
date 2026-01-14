import { LinkedIn, GitHub, Instagram } from "../../../assets/svg";
import { navItems } from "../navItems";
const Footer = () => {
  const { resourcesFooter, companyFooter } = navItems[0];
  return (
    <footer className="bg-[#022DA4] text-white mt-14">

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-4 items-center">
        <div>

          <div className="w-fit mb-4">
            <img src="/logo3.png" alt="MentSource Logo" className="h-16 w-auto" loading="lazy" />
            {/* <p className="font-semibold text-lg text-gray-900">MentorSource</p> */}
          </div>
          <p className="max-w-[350px]">
            Our beautiful designs open the door to a realm of limitless
            possibilities, where imagination knows no bounds
          </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 items-center">
          <div>
            <h2 className="font-medium mb-4">Resources</h2>
            <div className="cursor-pointer">
              {resourcesFooter.map((resource, idx) => {
                return (
                  <p key={idx} className="hover:text-gray-900">
                    {resource.texts}
                  </p>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="font-medium mb-4">Industry</h2>
            <div className="cursor-pointer">
              {companyFooter.map((company, idx) => {
                return (
                  <p key={idx} className="hover:text-gray-900">
                    {company.texts}
                  </p>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="font-medium mb-4">Get in touch</h2>
            {/* <p className="mb-2">
              <a
                href="mailto:nicubhub@gmail.com"
                className="hover:text-gray-900"
              >
                nicubhub@gmail.com
              </a>
            </p> */}
            <div className="text-[#D9432C]  flex items-center gap-x-3">
              <LinkedIn className="hover:text-gray-400" />
              <a
                href="https://github.com/NICUB-Open-Source-Community"
                target="_blank"
              >
                <GitHub className="hover:text-gray-400" />
              </a>
              <Instagram className="hover:text-gray-400" />
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
