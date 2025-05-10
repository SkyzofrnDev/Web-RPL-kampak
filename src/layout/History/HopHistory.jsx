import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SejarahKaprog = () => {
  const items = [
    {
      img: "/Foto Kaprok/Kaprok1.jpg",
      year: "2003-2004",
      event: "MEISYE YETI, s.Si, MT",
      detail: "Kepala Program RPL",
    },
    {
      img: "/Foto Kaprok/kaprok2.jpg",
      year: "2005-2006",
      event: "HERIYADI S.Kom",
      detail: "Kepala Program RPL",
    },
    {
      img: "/Foto Kaprok/Kaprok1.jpg",
      year: "2006 - 2008",
      event: "MEISYE YETI, s.Si, MT",
      detail: "Kepala Program RPL",
    },
    {
      img: "/Foto Kaprok/kaprok3.jpg",
      year: "2008 - 2015",
      event: "HERI HERMAWAN, s.Kom",
      detail: "Kepala Program RPL",
    },

    {
      img: "/Foto Kaprok/kaprok4.jpg",
      year: "2016-2020",
      event: "HIKMAT DEVIYANA ST,M.M.Pd",
      detail: "Kepala Program RPL",
    },
    {
      img: "/Foto Kaprok/kaprok5.jpg",
      year: "2020 - 2022",
      event: "ALFI RAHMAN HAKIM s.Kom",
      detail: "Kepala Program RPL",
    },
    {
      img: "/Foto Kaprok/kaprok6.jpg",
      year: "2022 - 2024",
      event: "YULI DIANA, S.T",
      detail: "Kepala Program RPL",
    },
    {
      img: "/Foto Kaprok/kaprok5.jpg",
      year: "2024 - Saat Ini",
      event: "ALFI RAHMAN HAKIM",
      detail: "Kepala Program RPL",
    },
  ];

  const settings = {
    infinite: false,
    easing: "ease-in-out",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#272727] text-white font-poppins pt-10 pb-10 xl:pb-0">
      <div className="text-center my-10">
        <p className="text-2xl xl:text-3xl font-bold">Sejarah Kepala Program</p>
      </div>
      <div className="max-w-7xl mx-auto px-10 xl:px-5">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col p-4 mx-5 items-center justify-center"
            >
              <div className="mt-3 flex flex-col justify-center items-center">
                <div className="mb-6">
                  <img
                    src={item.img}
                    alt=""
                    className="rounded-[5%] w-[158px] h-[192px]"
                  />
                </div>
                <div className="w-[150%] flex items-center justify-center mb-6">
                  <hr className="w-[50%] border-[2px] border-white" />
                  <p className="bg-[#DFA859] w-5 rounded-full h-5 absolute z-10 "></p>
                  <hr className="w-[50%] border-[2px] border-white" />
                </div>
                <h3 className="text-l font-bold">{item.event}</h3>
                <h4 className="text-xs text-crystal">{item.detail}</h4>
                <time className="text-sm">{item.year}</time>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SejarahKaprog;
