import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { ButtonWhite } from "../../components/Index";
const images = ["/RplBuilding/1.png", "/RplBuilding/2.png"];

const Herosection = () => {
  const [isFirstImage, setIsFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstImage((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-[100vh] md:h-[110vh] hero-container relative w-full xl:h-[110vh] overflow-hidden"
      id="#"
    >
      <div
        className="w-full h-full relative"
        style={{
          WebkitMaskImage: "url('/RplBuilding/Union-Home.svg')",
          maskImage: "url('/RplBuilding/Union-Home.svg')",
          WebkitMaskSize: "cover",
          maskSize: "cover",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      >
        <div
          className={`brightness-50 absolute inset-0 transition-opacity duration-1000 ${
            isFirstImage ? "opacity-100" : "opacity-0"
          } bg-cover bg-center`}
          style={{
            backgroundImage: `url('${images[0]}')`,
          }}
        ></div>

        <div
          className={`brightness-50 absolute inset-0 transition-opacity duration-1000 ${
            isFirstImage ? "opacity-0" : "opacity-100"
          } bg-cover bg-center`}
          style={{
            backgroundImage: `url('${images[1]}')`,
          }}
        ></div>
      </div>

      <div className="absolute top-[52%] transform -translate-y-1/2 left-30 h-[35%]">
        <div className="h-[100%] content-between xl:h-full grid">
          <h1 className="text-xl leading-relaxed md:text-2xl  lg:leading-relaxed xl:leading-relaxed md:leading-relaxed  max-w-[90%] lg:max-w-[70%] lg:text-3xl font-semibold xl:text-4xl min-h-28 xl:max-w-[650px]  text-white">
            <TypeAnimation
              sequence={[
                "Rekayasa",
                700,
                "Rekayasa Perangkat",
                700,
                "Rekayasa Perangkat Lunak",
                2500,
                "Rekayasa Perangkat",
                700,
                "Rekayasa",
                700,
                "Software",
                700,
                "Software Engineering",
                2500,
                "Software",
                700,
              ]}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </h1>
          <div className="items-end">
            <a href="#identity" className="ml-3">
              <ButtonWhite text="Selanjutnya"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
