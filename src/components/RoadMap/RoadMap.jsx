import React from "react";

const journeyData = [
    {
      "image": "/path/to/image1.svg",
      "desc": "Description for the first journey entry."
    },
    {
      "image": "/path/to/image2.svg",
      "desc": "Description for the second journey entry."
    },
    {
      "image": "/path/to/image3.svg",
      "desc": "Description for the third journey entry."
    }
  ]
const RoadMap = () => {
  return (
    <div className="flex pt-56 flex-col items-center w-full justify-center bg-[#272727] text-white py-12 select-none">
      <div className="text-center">
        <p className="text-4xl font-semibold">
          Mata Pelajaran Jurusan Selama Kelas 10
        </p>
        <p className="text-xl mt-2">
          Apa saja yang kita pelajari selama 1 tahun di kelas 10?
        </p>
      </div>
      <div className="w-full px-56 mt-20">
        {journeyData.map((entry, index) => (
          <div
            key={index}
            className={`flex mt-10 items-stretch justify-between ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-1/3 flex items-center justify-center px-4">
              <img
                className="w-full h-[280px] object-cover rounded-lg"
                src={entry.image}
                alt={`Journey ${index + 1}`}
              />
            </div>
            <div className="w-1/3 flex flex-col items-center  px-4">
              <div className="p-3 rounded-full bg-white"></div>
              {index !== journeyData.length - 1 && (
                <div className="w-0.5 h-[280px] bg-white"></div>
              )}
            </div>
            <div className="w-1/3 flex   px-4 h-[280px]">
              <p className="radio text-xl max-w-md">{entry.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadMap;
