import { useState, useEffect } from "react";
import { CardNews, SkeletonNews } from "../../components/Index";

const WorkForce = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // jumlah card per view (responsif)
  const [cardsPerView, setCardsPerView] = useState(3);
  const cardWidth = 400; // px, dasar ukuran card
  const [current, setCurrent] = useState(0);

  // 🔹 handle responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1); // hp
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // tablet
      } else {
        setCardsPerView(3); // laptop
      }
    };

    handleResize(); // run pertama kali
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch data dari API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://127.0.0.1:8000/api/berita");
        if (!response.ok) throw new Error("Failed to fetch data");
        const apiData = await response.json();

        const transformedData = apiData.map((item) => ({
          id: item.id,
          title: item.judul,
          description: item.deskripsi,
          image: `http://127.0.0.1:8000/storage/${item.berita_img}`,
          tags: item.tags,
          created_at: item.created_at,
        }));

        setData(transformedData);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching Berita data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const maxIndex = Math.max(data.length - cardsPerView, 0);

  // Reset current ketika data berubah
  useEffect(() => {
    if (current > maxIndex) {
      setCurrent(0);
    }
  }, [data.length, current, maxIndex]);

  const prev = () => setCurrent((prev) => (prev === 0 ? maxIndex : prev - 1));
  const next = () => setCurrent((prev) => (prev === maxIndex ? 0 : prev + 1));

  // 🔹 loading
  if (loading) {
    return <SkeletonNews />;
  }

  // 🔹 error
  if (error) {
    return (
      <div className="bg-[#272727] pt-20">
        <div className="text-center font-bold text-white text-3xl lg:text-4xl mb-28">
          <p>BERITA TERBARU</p>
          <p>REKAYASA PERANGKAT LUNAK</p>
        </div>
        <div className="text-center py-20">
          <p className="text-red-400 text-lg">Error loading data: {error}</p>
        </div>
      </div>
    );
  }

  // 🔹 kosong
  if (data.length === 0) {
    return (
      <div className="bg-[#272727] pt-20">
        <div className="text-center font-bold text-white text-3xl lg:text-4xl mb-28">
          <p>BERITA TERBARU</p>
          <p>REKAYASA PERANGKAT LUNAK</p>
        </div>
        <div className="text-center py-20">
          <p className="text-white text-lg">Tidak ada data berita tersedia.</p>
        </div>
      </div>
    );
  }

  // 🔹 main render
  return (
    <div className="bg-[#272727] pt-20">
      <div className="text-center font-bold text-white text-3xl lg:text-4xl mb-28">
        <p>BERITA TERBARU</p>
        <p>REKAYASA PERANGKAT LUNAK</p>
      </div>

      <div className="flex items-center justify-center gap-4">
        {/* left button */}
        <button onClick={prev}>
          <svg width="45" height="45" viewBox="0 0 65 65" fill="none">
            <circle cx="32.5" cy="32.5" r="31" stroke="white" strokeWidth="3" />
            <path
              d="M36.6071 21L25 33L36.6071 45"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* slider */}
        <div className="relative w-full max-w-[1300px] overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${current * (100 / cardsPerView)}%)`,
              width: `${(data.length * 100) / cardsPerView}%`,
            }}
          >
            {data.map((item) => (
              <div
                key={item.id}
                className={`w-[${100 / cardsPerView}%] flex-shrink-0 px-2`}
                style={{ width: `${80 / cardsPerView}%` }}
              >
                <CardNews {...item} />
              </div>
            ))}
          </div>
        </div>

        {/* right button */}
        <button onClick={next}>
          <svg
            width="45"
            height="45"
            viewBox="0 0 65 65"
            fill="none"
            style={{ transform: "rotate(180deg)" }}
          >
            <circle cx="32.5" cy="32.5" r="31" stroke="white" strokeWidth="3" />
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

      {/* dots */}
      <div className="flex justify-center mt-6 gap-2">
        {Array(maxIndex + 1)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === current ? "bg-white scale-110" : "bg-gray-500"
              }`}
            />
          ))}
      </div>
    </div>
  );
};

export default WorkForce;
