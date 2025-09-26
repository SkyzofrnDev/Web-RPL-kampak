import React from "react";
import { RoadMap } from "../../components/Index";
const journeyData = [
  {
    image: "/cover/laravel.png",
    desc: "Dapat menguasai pemrograman lanjutan berbasis Website menggunakan PHP & Laravel serta dapat mengimplementasikan pembuatan Website secara interaktif & Dinamis.",
  },
  {
    image: "/cover/flutter.png",
    desc: "Mampu memahami dasar-dasar Flutter serta dapat membuat aplikasi mobile sederhana dengan fungsionalitas yang berjalan baik pada platform Android maupun iOS.",
  },
  {
    image: "/cover/db.jpg",
    desc: "Memahami penggunaan database lanjutan serta mampu mengimplementasikannya pada berbagai program atau aplikasi, termasuk dalam perancangan, pengelolaan, dan optimasi data.",
  },
  {
    image: "/cover/api.png",
    desc: "Mampu memahami konsep Restful API serta mengimplementasikannya dalam pengembangan aplikasi berbasis CRUD (Create, Read, Update, Delete) secara efisien dan terstruktur.",
  },
];
const RoadMapClass12 = () => {
  return (
    <div className="pt-56 bg-[#272727] text-white py-12 select-none">
      <div className="text-center">
        <p className="text-4xl font-semibold">
          Mata Pelajaran Jurusan Selama Kelas 12
        </p>
        <p className="text-xl mt-2">
          Apa saja yang kita pelajari selama 6 Bulan di kelas 12?
        </p>
      </div>
      <RoadMap data={journeyData} />
    </div>
  );
};

export default RoadMapClass12;
