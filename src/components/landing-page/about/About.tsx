import { aboutCards } from "./aboutUs";
import { useState, useEffect } from "react";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === aboutCards.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (

    <div className="pt-10 pb-4 max-w-[1800px] mx-auto border-b bg-[#F5F8FE] rounded-xl px-8">
      <main className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
        <div className="" >

          <h2 className="text-[#D9432C] text-2xl font-medium mb-4">
            MenSource At A Glance
          </h2>
          <div className="flex flex-col gap-8">
            <p className="text-lg max-w-[600px] text-gray-600">
              MentSource drives open source innovation, enabling impactful
              collaborations and fostering a thriving global community of
              contributors.
            </p>
            <p className="text-lg max-w-[600px] text-gray-600">
              We envision a world where technology is accessible to everyone,
              and collaboration drives innovation. MentSource strives to: Cultivate a
              global network of developers passionate about open source. Lead
              the way in bridging the gap between education and industry
              needs.Create inclusivity, ensuring equal opportunities for
              individuals from diverse backgrounds to succeed in tech
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col gap-6 h-[25rem] w-full">
          <div className="relative">
            <img
              src={aboutCards[currentIndex].img}
              className="w-[600px] h-[250px] rounded-lg transition-all duration-500"
              alt="aboutimg"
              loading="lazy"
            />
            <div className="flex items-center gap-4 my-4">
              <h1 className="text-3xl font-medium text-[#01A7E1]">
                {aboutCards[currentIndex].heading}
              </h1>
              <p className="text-gray-600 text-lg">{aboutCards[currentIndex].description}</p>
            </div>
          </div>
          {/* Indicator dots */}
          <div className="flex gap-2">
            {aboutCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#01A7E1] w-6' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
