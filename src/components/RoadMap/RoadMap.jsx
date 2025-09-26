import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const RoadMap = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 5000, 
      once: true,
    });
  }, []);
  return (
    <div className="flex  flex-col items-center w-full justify-center bg-[#272727] text-white py-12 select-none">
      <div className="w-full px-20 lg:px-56 mt-20">
        {data.map((entry, index) => (
          <div
            key={index}
            className={` lg:flex mt-10 items-stretch justify-between ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div
              data-aos="fade-up"  
              className="lg:w-1/3 w-full bg-cover flex items-center justify-center px-4"
            >
              <img
                className="w-full h-[280px] object-cover rounded-lg"
                src={entry.image}
                alt={`Journey ${index + 1}`}
              />
            </div>
            <div
              data-aos="fade-up"
              className="hidden lg:flex w-1/3 flex-col items-center  px-4"
            >
              <div className="p-3 rounded-full bg-white"></div>
              {index !== data.length - 1 && (
                <div className="w-0.5 h-[280px] bg-white"></div>
              )}
            </div>
            <div
              data-aos="fade-up"
              className="w-full lg:w-1/3 flex   px-4 lg:h-[280px]"
            >
              <p className="radio text-xl lg:max-w-md text-center lg:text-left mt-10 lg:mt-0">{entry.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadMap;
