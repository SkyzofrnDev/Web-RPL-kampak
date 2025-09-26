import SkeletonCardWorkForce from "./SkeletonCardWorkForce";

const SkeletonWorkForce = () => {
  return (
    <div>
      <div className="bg-[#272727] pt-20">
        <div className="text-center font-bold text-white text-3xl lg:text-4xl mb-28">
          <p>TENAGA KERJA</p>
          <p>REKAYASA PERANGKAT LUNAK</p>
        </div>

        <div className="flex items-center justify-center gap-4">
          {/* Left Button skeleton */}
          <div className="w-[65px] h-[65px] rounded-full bg-gray-600 animate-pulse"></div>

          {/* Slider skeleton */}
          <div className="relative w-[1200px] overflow-hidden">
            <div className="flex gap-4">
              {Array(3).fill().map((_, i) => (
                <div key={i} className="w-[400px] flex-shrink-0 px-4">
                  <SkeletonCardWorkForce />
                </div>
              ))}
            </div>
          </div>

          {/* Right Button skeleton */}
          <div className="w-[65px] h-[65px] rounded-full bg-gray-600 animate-pulse"></div>
        </div>

        {/* Dots skeleton */}
        <div className="flex justify-center mt-6 gap-2">
          {Array(3).fill().map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gray-600 animate-pulse"
            />
          ))}
        </div>
      </div>
      <img src="/Svg/Anim2LD.svg" alt="" srcset="" />
    </div>
  );
};

export default SkeletonWorkForce;



