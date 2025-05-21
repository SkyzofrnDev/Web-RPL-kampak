import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const RoadMap = ({ data }) => {
  AOS.init({
  duration: 6000,
  once: true,
  offset: 200, // Atur offset sesuai kebutuhan
});
  return (
    <div className="flex  flex-col items-center w-full justify-center bg-[#272727] text-white py-12 select-none">
      <div className="w-full px-56 mt-20">
        {data.map((entry, index) => (
          <div
            key={index}
            className={`flex mt-10 items-stretch justify-between ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="w-1/3 flex items-center justify-center px-4"
            >
              <img
                className="w-full h-[280px] object-cover rounded-lg"
                src={entry.image}
                alt={`Journey ${index + 1}`}
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="w-1/3 flex flex-col items-center  px-4"
            >
              <div className="p-3 rounded-full bg-white"></div>
              {index !== data.length - 1 && (
                <div className="w-0.5 h-[280px] bg-white"></div>
              )}
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="6000"
              className="w-1/3 flex   px-4 h-[280px]"
            >
              <p className="radio text-xl max-w-md">{entry.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadMap;
