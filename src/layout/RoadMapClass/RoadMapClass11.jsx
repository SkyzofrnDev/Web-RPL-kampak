import React from "react";
import { RoadMap } from "../../components/Index";
const journeyData = [
  {
    image: "/cover/game.png",
    desc: "Dapat memahami Konsep pembuatan game dasar dan dapat membuat Game menggunakan Engine Website atau Game Engine",
  },
  {
    image: "/cover/html.png",
    desc: "Dapat menguasai pemrograman dasar berbasis Website menggunakan HTML, CSS, Dan JavaScript serta dapat mengimplementasikan pembuatan Website secara interaktif.",
  },
  {
    image: "/cover/mysql.png",
    desc: "Dapat memahami dan menggunakan Database MySQL, Serta dapat memahami konsep Query dasar (DML, DDL, DCL).",
  },
  {
    image: "/cover/c.jpg",
    desc: "Dapat memahami pemrograman berorientasi objek menggunakan Java serta membuat aplikasi desktop sederhana menggunakan C# WInForm.",
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
