import SkeletonCardAchievements from "./SkeletonCardAchievements";

const SkeletonAchievement = () => {
  return (
    <div>
      <img src="/Svg/Anim1LU.svg" alt="" className="" />
      <div className="flex flex-col items-center justify-center bg-[#272727] text-white py-12 select-none">
        {/* Header skeleton */}
        <div className="text-center mb-10 animate-pulse">
          <div className="h-6 bg-gray-600 rounded w-48 mx-auto mb-2"></div>
          <div className="h-8 bg-gray-600 rounded w-64 mx-auto"></div>
        </div>

        {/* Controls + Slider skeleton */}
        <div className="flex items-center justify-center gap-6">
          {/* Left Button skeleton */}
          <div className="w-[65px] h-[65px] rounded-full bg-gray-600 animate-pulse"></div>

          {/* Slider skeleton */}
          <div className="flex gap-8">
            {Array(3).fill().map((_, i) => (
              <div key={i} className="w-[400px] flex justify-center items-center flex-shrink-0">
                <SkeletonCardAchievements />
              </div>
            ))}
          </div>

          {/* Right Button skeleton */}
          <div className="w-[65px] h-[65px] rounded-full bg-gray-600 animate-pulse"></div>
        </div>

        {/* Dots skeleton */}
        <div className="flex justify-center mt-6 gap-2">
          {Array(3).fill().map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-gray-600 animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonAchievement;



