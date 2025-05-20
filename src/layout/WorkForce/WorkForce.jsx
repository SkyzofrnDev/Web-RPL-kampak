import { useState } from "react";
import { CardWorkForce } from "../../components/Index";

const data = Array(6).fill({
  name: "ALFI RAHMAN HAKIM, S.Kom",
  title: "Kepala Program Jurusan Rekayasa Perangkat Lunak",
  nip: "198302062023211000",
});

const WorkForce = () => {
  const cardsPerView = 3;
  const cardWidth = 400; // px, sesuaikan dengan ukuran asli card kamu
  const maxIndex = data.length - cardsPerView;
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="bg-[#272727] pt-20">
        <div className="text-center font-bold text-white text-3xl lg:text-4xl mb-28">
          <p>TENAGA KERJA</p>
          <p>REKAYASA PERANGKAT LUNAK</p>
        </div>

        <div className="flex items-center justify-center gap-4">
          {/* Left Button */}
          <button onClick={prev}>
            <svg width="65" height="65" viewBox="0 0 65 65" fill="none">
              <circle
                cx="32.5"
                cy="32.5"
                r="31"
                stroke="white"
                strokeWidth="3"
              />
              <path
                d="M36.6071 21L25 33L36.6071 45"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Slider */}
          <div className="relative w-[1200px] overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${current * cardWidth}px)`,
                width: `${data.length * cardWidth}px`,
              }}
            >
              {data.map((item, idx) => (
                <div key={idx} className="w-[400px] flex-shrink-0 px-4">
                  <CardWorkForce {...item} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button onClick={next}>
            <svg
              width="65"
              height="65"
              viewBox="0 0 65 65"
              fill="none"
              style={{ transform: "rotate(180deg)" }}
            >
              <circle
                cx="32.5"
                cy="32.5"
                r="31"
                stroke="white"
                strokeWidth="3"
              />
              <path
                d="M36.6071 21L25 33L36.6071 45"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array(maxIndex + 1)
            .fill()
            .map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  i === current ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
        </div>
      </div>
      <img src="/Svg/Anim2LD.svg" alt="" srcset="" />
    </div>
  );
};

export default WorkForce;
