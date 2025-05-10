import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VisiMission = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true,
    });
  }, []);

  return (
    <div className="text-[#272727] font-medium p-10 xl:p-24 ">
      <div className="flex xl:flex-row flex-col mb-20 gap-10 xl:gap-28">
        <div className="VISI" data-aos="fade-right">
          <p className="font-semibold text-3xl xl:text-5xl text-center text-[#272727]">
            Visi
          </p>
          <div className=" mt-3 xl:mt-10">
            <p>
              Menjadi kompetensi keahlian yang dapat bekerjasama dalam
              pengembangan pendidikan kejuruan untuk menghasilkan lulusan yang
              berkompeten, berkarakter baik, berintegritas, berdaya saing global
              dan berbudaya yang berlandaskan keimanan dan ketaqwaan.
            </p>
          </div>
        </div>

        <div className="MISI" data-aos="fade-left">
          <p className="font-semibold text-3xl xl:text-5xl text-center text-[#DFA859]">
            Misi
          </p>
          <div className="mt-3 xl:mt-10">
            <ol className="list-decimal flex flex-col gap-2">
              <li>
                Menyelenggarakan pembinaan pembelajaran karakter baik, agar
                memiliki integritas tinggi dalam berperilaku dengan tetap
                mengutamakan ketaatan beribadah sesuai ajaran agama dan
                kepercayaan masing-masing serta bertoleransi terhadap
                sesama.&nbsp;
              </li>
              <li>
                Menyelenggarakan pembinaan pembelajaran yang berbudaya
                lingkungan, inovatif, kreatif dan kompetitif serta mampu
                mengembangkan diri secara berkesinambungan.
              </li>
              <li>Melaksanakan pembelajaran dengan model Teaching Factory.</li>
              <li>
                Menyelenggarakan pembelajaran dengan konsentrasi keahlian
                kurikulum link and match dengan dunia usaha dan industri.
              </li>
              <li>
                Melaksanakan pembelajaran yang menumbuhkan sika jujur, adil,
                kreatif, inovatif, peduli lingkungan, sesuai dengan profil
                Pelajar Pancasila
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="TUJUAN" data-aos="fade-up">
        <p className="font-semibold text-2xl xl:text-4xl text-center xl:text-start">
          Tujuan Jurusan{" "}
          <span className="text-[#DFA859]"> Rekayasa Perangkat Lunak</span>{" "}
        </p>

        <div className="mt-10 xl:pr-96">
          <ol className="list-decimal flex flex-col gap-2">
            <li>
              Menghasilkan lulusan yang bertakwa, berakhlak mulia, produktif,
              adaptif, kreatif, dan inovatif di bidang teknologi informatika
              khususnya rekayasa perangkat lunak (software Engineering) serta
              mampu melaksanakan hak dan kewajiban sebagai warga negara.
            </li>
            <li>
              Meningkatkan kecerdasan yang bermartabat didasari asas kecakapan
              hidup di bidang teknologi informatika – Rekayasa perangkat Lunak
              (Software Engineering).
            </li>
            <li>
              Menghasilkan lulusan yang berkualitas dan mampu bersaing di dunia
              kerja baik naosional, regional, maupun internasional di bidang
              teknologi informatika – Rekayasa Perangkat Lunak(Software
              Engineering).
            </li>
            <li>
              Membekal peserta didik dengan keterampilan, pengetahuan dan sikap
              agar kompeten:
              <ul className="list-disc ml-7">
                <li>Mengistal software aplikasi spesifik</li>
                <li>Mengoperasikan software aplikasi spesifik</li>
                <li>Merawat software aplikasi spesifik</li>
                <li>Membangun software aplikasi spesifik</li>
                <li>Mengelola usaha dibidang pembuatan software aplikasi</li>
              </ul>
            </li>
            <li>
              Membekali peserta didik dengan ilmu pengetahuan, Teknologi, dan
              seni agar mampu mengembangkan diri baik secara mandiri maupun
              melalui jenjang Pendidikan yang lebih tinggi.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default VisiMission;
