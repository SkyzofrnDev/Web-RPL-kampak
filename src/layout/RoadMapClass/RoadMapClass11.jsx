import React from "react";
import { RoadMap } from "../../components/Index";
const journeyData = [
  {
    image: "/path/to/image1.svg",
    desc: "Description for the first journey entry.",
  },
  {
    image: "/path/to/image2.svg",
    desc: "Description for the second journey entry.",
  },
  {
    image: "/path/to/image3.svg",
    desc: "Description for the third journey entry.",
  },
];
const RoadMapClass11 = () => {
  return (
    <div className="pt-56 bg-[#272727] text-white py-12 select-none">
      <div className="text-center">
        <p className="text-4xl font-semibold">
          Mata Pelajaran Jurusan Selama Kelas 11
        </p>
        <p className="text-xl mt-2">
          Apa saja yang kita pelajari selama 1 tahun di kelas 11?
        </p>
      </div>
      <RoadMap data={journeyData} />
    </div>
  );
};

export default RoadMapClass11;
