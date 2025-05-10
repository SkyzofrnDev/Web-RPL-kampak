import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HopHistory from "./HopHistory"

const History = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true, 
    });
  }, []);

  return (
    <div>
    <div className="bg-[#272727] w-full pt-16 px-8 xl:p-16 xl:pt-48">
      <div className="flex">
        <img
          src="https://picsum.photos/600/400"
          alt="video-jurusan"
          srcset=""
          className="hidden xl:block w-[40%] mr-10"
          data-aos="fade-right"
        />
        <div
          className="w-full xl:w-[50%] flex flex-col justify-center items-center xl:items-start"
          data-aos="fade-left"
        >
          <div className="flex font-semibold text-2xl mb-2 xl:text-4xl xl:mb-0">
            <p className="text-white">SEJARAH</p>
            <p className="text-[#DFA859] ml-4">SINGKAT</p>
          </div>
          <svg
            width="364"
            height="32"
            viewBox="0 0 364 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden xl:block"
          >
            <path d="M0 26.0809H348.786" stroke="#F7F7F8" stroke-width="3" />
            <path
              d="M349.072 31.49C347.299 31.49 345.829 30.9533 344.662 29.88C343.542 28.76 342.982 27.3833 342.982 25.75C342.982 24.1167 343.542 22.7633 344.662 21.69C345.829 20.57 347.299 20.01 349.072 20.01C350.799 20.01 352.222 20.57 353.342 21.69C354.462 22.7633 355.022 24.1167 355.022 25.75C355.022 27.3833 354.462 28.76 353.342 29.88C352.222 30.9533 350.799 31.49 349.072 31.49Z"
              fill="#DFA859"
            />
          </svg>
          <svg
            width="262"
            height="4"
            viewBox="0 0 262 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block mb-5 xl:hidden"
          >
            <path d="M0 2.08093H261.589" stroke="#F7F7F8" stroke-width="3" />
          </svg>

          <img
            src="https://picsum.photos/600/400"
            alt=""
            className="xl:hidden"
          />
          <p className="text-base text-white mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            possimus neque. Quibusdam aperiam mollitia molestiae repellendus!
            Quam voluptas, consequuntur necessitatibus quidem est minus, non
            numquam, reiciendis eaque rerum repudiandae sunt?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            possimus neque. Quibusdam aperiam mollitia molestiae repellendus!
            Quam voluptas, consequuntur necessitatibus quidem est minus, non
            numquam, reiciendis eaque rerum repudiandae sunt?
          </p>
        </div>
      </div>
      <HopHistory/>
    </div>
      <img src="./Svg/Anim2LU.svg" alt="Svg" srcSet="" />
    </div>
  );
};

export default History;
