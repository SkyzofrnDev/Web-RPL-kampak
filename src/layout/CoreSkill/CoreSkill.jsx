import React from 'react';

const coreSkillsData = [
  {
    title: "IOT",
    description: "IoT merujuk pada jaringan objek fisik, seperti perangkat, kendaraan, dan bangunan, yang terhubung ke internet. Objek-objek ini dilengkapi dengan sensor, perangkat lunak, dan konektivitas internet, memungkinkan mereka untuk saling berkomunikasi dan bertindak secara mandiri.",
    svgPath: "/assets/SvgCoreSkill/iot.svg"
  },
  {
    title: "DEVELOPER GAME",
    description: "Game developer (atau pengembang gim) adalah individu atau tim yang bertanggung jawab untuk menciptakan, merancang, dan mengembangkan permainan video.",
    svgPath: "/assets/SvgCoreSkill/Game.svg"
  },
  {
    title: "WEB DEVELOPER",
    description: "Web developer adalah seorang programmer yang bertugas membuat dan mengembangkan website atau world wide web. Secara garis besar, tanggung jawab web developer adalah membangun sebuah website atau aplikasi dan memastikan performa website tetap optimal.",
    svgPath: "/assets/SvgCoreSkill/Web.svg"
  },
  {
    title: "SCHEMA MASTERS",
    description: "Skema atau Database Schema adalah framework atau blueprint yang digunakan oleh para programmer untuk membangun dan menulis kode database.",
    svgPath: "/assets/SvgCoreSkill/databse2.svg"
  },
  {
    title: "DEVELOPER APP",
    description: "App development atau pengembangan aplikasi adalah proses pembuatan aplikasi untuk perangkat mobile, desktop, atau web. Dalam era digital yang modern, aplikasi mobile telah menjadi bagian integral dari kehidupan kita, memudahkan akses informasi, hiburan, dan solusi bisnis di ujung jari pengguna.",
    svgPath: "/assets/SvgCoreSkill/aplikasi.svg"
  },
  {
    title: "ANALYTIC SYSTEM",
    description: "Analisis sistem adalah teknik pemecahan masalah yang memecah sistem menjadi bagian-bagian komponen.",
    svgPath: "/assets/SvgCoreSkill/Database.svg"
  }
];

const Card = ({ title, description, svgPath }) => (
  <div className="cardcore flex flex-col items-center bg-white shadow-black py-5 px-3 text-black w-full lg:mx-2 justify-evenly">
    <img src={svgPath} alt="icon-image" className='w-16' />
    <div>
      <p className="font-bold md:text-3xl mb-2">{title}</p>
      <p className="text-[9px] md:text-base font-semibold">{description}</p>
    </div>
  </div>
);

const CoreSkill = () => {
  return (
    <div className="pt-20 lg:pt-36 px-6 bg-[#272727] text-white text-center md:p-16">
      <p className="font-bold text-3xl mb-5 md:mb-10">Core Skills</p>
      <p className="font-medium text-sm mb-10 md:text-lg md:mb-16">
        Beranjak ke tahap selanjutnya yaitu Core Skills, Core Skills ini akan
        dipelajari di tahun ke 2.5 masa belajar, berbeda dengan basic skills
        yang mempelajari hal dasar, tahap core skills ini merupakan tahap
        penting dimana kita akan belajar hal-hal yang akan dibutuhkan di dunia
        Industri. Yang termasuk diantaranya yaitu :
      </p>
      <div className=" grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {coreSkillsData.map((skill, index) => (
          <Card
            key={index}
            title={skill.title}
            description={skill.description}
            svgPath={skill.svgPath}
          />
        ))}
      </div>
    </div>
  );
};

export default CoreSkill;
