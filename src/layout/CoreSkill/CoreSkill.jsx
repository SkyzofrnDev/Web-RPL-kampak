import React from 'react';

const coreSkillsData = [
  {
    title: "ITS",
    description: "ITS Atau information Technology System, Disini Kita Akan Belajar Bagaimana Cara Membuat Sebuah Program berbasis aplikasi desktop maupun ponsel, disini kita tidak hanya membuat sebuah program namun kita juga menganalisa kebutuhan pengguna hingga ke struktur database",
    svgPath: "/SvgCoreSkill/iot.svg"
  },
  {
    title: "PEMBUATAN GAME",
    description: "Game developer (atau pengembang gim) adalah individu atau tim yang bertanggung jawab untuk menciptakan, merancang, dan mengembangkan permainan video.",
    svgPath: "/SvgCoreSkill/Game.svg"
  },
  {
    title: "PEMBUATAN WEBSITE",
    description: "Web developer adalah seorang programmer yang bertugas membuat dan mengembangkan website atau world wide web. Secara garis besar, tanggung jawab web developer adalah membangun sebuah website atau aplikasi dan memastikan performa website tetap optimal.",
    svgPath: "/SvgCoreSkill/Web.svg"
  },
  {
    title: "DATABASE ENGGINER",
    description: "Database engineer adalah profesional yang perannya melibatkan penciptaan dan pemeliharaan struktur database efisien dan efektif. Hal ini bertujuan untuk menyimpan, mengatur, dan mengakses data dengan cara yang aman dan cepat. ",
    svgPath: "/SvgCoreSkill/databse2.svg"
  },
  {
    title: "PEMBUAT APLIKASI",
    description: "App development atau pengembangan aplikasi adalah proses pembuatan aplikasi untuk perangkat mobile, desktop, atau web. Dalam era digital yang modern, aplikasi mobile telah menjadi bagian integral dari kehidupan kita, memudahkan akses informasi, hiburan, dan solusi bisnis di ujung jari pengguna.",
    svgPath: "/SvgCoreSkill/aplikasi.svg"
  },
  {
    title: "ANALISIS SISTEM",
    description: "Analisis sistem adalah teknik pemecahan masalah yang memecah sistem menjadi bagian-bagian komponen.",
    svgPath: "/SvgCoreSkill/Database.svg"
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
      <p className="font-bold text-3xl mb-5 md:mb-10">Skill Khusus Apa Saja Kita Dalam 2.5 Tahun?</p>
      <p className="font-medium text-sm mb-10 md:text-lg md:mb-16">
        Beranjak ke tahap selanjutnya yaitu Core Skill, Skill Khusus ini akan
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
