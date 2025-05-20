import { useState, useRef, useEffect } from "react";
import { CardAchievements } from "../../components/Index";

const data = Array(6).fill({
  name: "ALFI RAHMAN HAKIM, S.Kom",
  title: "Juara",
  desc: "Juara tingkat nasional bidang teknologi",
  nip: "198302062023211000",
});

const Achievement = () => {
  const cardWidth = 400;
  const gap = 32;

  const [cardsPerView, setCardsPerView] = useState(3);
  const [current, setCurrent] = useState(0);

  const maxIndex = Math.max(data.length - cardsPerView, 0);

  const startX = useRef(0);
  const isDragging = useRef(false);
  const deltaX = useRef(0);

  const handleStart = (x) => {
    startX.current = x;
    isDragging.current = true;
  };

  const handleMove = (x) => {
    if (!isDragging.current) return;
    deltaX.current = x - startX.current;
  };

  const handleEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (deltaX.current < -100 && current < maxIndex) {
      setCurrent(current + 1);
    } else if (deltaX.current > 100 && current > 0) {
      setCurrent(current - 1);
    }

    deltaX.current = 0;
  };

  // Set cardsPerView based on screen width
  const updateCardsPerView = () => {
    const width = window.innerWidth;
    if (width > 1390) {
      setCardsPerView(3);
    } else if (width >= 1072) {
      setCardsPerView(2);
    } else {
      setCardsPerView(1);
    }
  };

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    if (current > data.length - cardsPerView) {
      setCurrent(0); // Reset ke 0 biar tidak overflow
    }
  }, [cardsPerView]);

  return (
    <div>
      <img src="/Svg/Anim1LU.svg" alt="" className="" />
      <div className="flex flex-col items-center justify-center bg-[#272727] text-white py-12 select-none">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-xl font-medium mb-2">Album Prestasi Siswa</h1>
          <h2 className="text-3xl font-semibold">Our Achievements</h2>
        </div>

        {/* Controls + Slider */}
        <div className="flex items-center justify-center gap-6">
          {/* Left Button */}
          <button onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}>
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
          <div
            className="relative overflow-hidden touch-pan-x"
            style={{
              width: `${cardsPerView * cardWidth + (cardsPerView - 1) * gap}px`,
            }}
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseMove={(e) => handleMove(e.clientX)}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={handleEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${current * (cardWidth + gap)}px)`,
                width: `${data.length * (cardWidth + gap)}px`,
                gap: `${gap}px`,
              }}
            >
              {data.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[400px] flex justify-center items-center flex-shrink-0"
                >
                  <CardAchievements {...item} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={() => setCurrent((prev) => Math.min(prev + 1, maxIndex))}
          >
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
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  i === current ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
