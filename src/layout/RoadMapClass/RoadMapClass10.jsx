import React from "react";
import { RoadMap } from "../../components/Index";
const journeyData = [
  {
    image: "/cover/pemrograman_dasar.jpg",
    desc: "Dapat memahami konsep pemrograman dasar seperti Algoritma dasar, Usecase, Flowchart, DLL.",
  },
  {
    image: "/cover/java.png",
    desc: "Dapat memahami pemrograman berorientasi objek menggunakan Java serta membuat aplikasi desktop sederhana menggunakan Java JFrame",
  },
  {
    image: "/cover/office.jpg ",
    desc: "Dapat menguasai Aplikasi Office dasar seperti Word, Excel, Powerpoint dan dapat memahami konsep jaringan dasar ",
  },
];

const RoadMapClass10 = () => {
  return (
    <div className=" pt-56 bg-[#272727] text-white py-12 select-none">
      <div className="text-center">
        <p className="text-4xl font-semibold">
          Mata Pelajaran Jurusan Selama Kelas 10
        </p>
        <p className="text-xl mt-2">
          Apa saja yang kita pelajari selama 1 tahun di kelas 10?
        </p>
      </div>
      <RoadMap data={journeyData} />
    </div>
  );
};

export default RoadMapClass10;
