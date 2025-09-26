import SkeletonCardNews from "./SkeletonCardNews";

const SkeletonNews = () => {
  return (
    <div className="bg-[#272727] pt-20">
      <div className="text-center font-bold text-white text-3xl lg:text-4xl mb-28">
        <p>BERITA TERBARU</p>
        <p>REKAYASA PERANGKAT LUNAK</p>
      </div>

      <div className="flex items-center justify-center gap-4">
        {/* left button skeleton */}
        <div className="w-[45px] h-[45px] rounded-full bg-gray-600 animate-pulse"></div>

        {/* slider skeleton */}
        <div className="relative w-full max-w-[1300px] overflow-hidden">
          <div className="flex gap-4">
            {Array(3).fill().map((_, i) => (
              <div key={i} className="w-1/3 flex-shrink-0 px-2">
                <SkeletonCardNews />
              </div>
            ))}
          </div>
        </div>

        {/* right button skeleton */}
        <div className="w-[45px] h-[45px] rounded-full bg-gray-600 animate-pulse"></div>
      </div>

      {/* dots skeleton */}
      <div className="flex justify-center mt-6 gap-2">
        {Array(3).fill().map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-gray-600 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
};

export default SkeletonNews;



