import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ButtonBlack } from "../../components/Index";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true,
    });
  }, []);

  return (

    <div
      id="identity"
      className="mt-20 ml-8 xl:ml-20 text-[#272727] mb-14 xl:mb-36 flex flex-col justify-center"
    >
      <p className="font-semibold text-3xl xl:text-5xl" data-aos="fade-right">
        Identitas Jurusan
      </p>
      <div
        className="flex items-center flex-col-reverse mr-8 xl:mr-0 xl:flex-row mb-9"
        data-aos="fade-right"
      >
        <p className="font-medium mt-10 text-base xl:text-xl  xl:mr-10 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          possimus neque. Quibusdam aperiam mollitia molestiae repellendus! Quam
          voluptas, consequuntur necessitatibus quidem est minus, non numquam,
          reiciendis eaque rerum repudiandae sunt?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          possimus neque. Quibusdam aperiam mollitia molestiae repellendus! Quam
          voluptas, consequuntur necessitatibus quidem est minus, non numquam,
          reiciendis eaque rerum repudiandae sunt?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          possimus neque. Quibusdam aperiam mollitia molestiae repellendus! Quam
          voluptas, consequuntur nece ssitatibus quidem est minus, non numquam,
          reiciendis eaque rerum repudiandae sunt?
        </p>
        <img
          src="https://picsum.photos/600/400"
          alt="video-jurusan"
          srcset=""
          className="w-full mt-5 xl:mt-0 xl:mr-10"
          data-aos="fade-left"
        />
      </div>

      <ButtonBlack text="Selanjutnya" />
    </div>
  );
};

export default About;
