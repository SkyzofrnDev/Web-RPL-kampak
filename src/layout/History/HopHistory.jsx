import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SejarahKaprog = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://127.0.0.1:8000/api/kaprog');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const apiData = await response.json();
        
        // Transform API data to match component structure
        const transformedData = apiData.map(item => ({
          img: `http://127.0.0.1:8000/storage/${item.kaprog_img}`,
          year: item.masa_jabatan,
          event: item.nama,
          detail: "Kepala Program RPL"
        }));
        
        setItems(transformedData);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching Kaprog data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  // Show loading state
  if (loading) {
    return (
      <div className="bg-[#272727] text-white font-poppins pt-10 pb-10 xl:pb-0">
        <div className="text-center my-10">
          <p className="text-2xl xl:text-3xl font-bold">Sejarah Kepala Program</p>
        </div>
        <div className="max-w-7xl mx-auto px-10 xl:px-5">
          <div className="text-center py-20">
            <p className="text-lg">Loading data Kepala Program...</p>
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="bg-[#272727] text-white font-poppins pt-10 pb-10 xl:pb-0">
        <div className="text-center my-10">
          <p className="text-2xl xl:text-3xl font-bold">Sejarah Kepala Program</p>
        </div>
        <div className="max-w-7xl mx-auto px-10 xl:px-5">
          <div className="text-center py-20">
            <p className="text-lg text-red-400">Error loading data: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  // Show empty state if no data
  if (items.length === 0) {
    return (
      <div className="bg-[#272727] text-white font-poppins pt-10 pb-10 xl:pb-0">
        <div className="text-center my-10">
          <p className="text-2xl xl:text-3xl font-bold">Sejarah Kepala Program</p>
        </div>
        <div className="max-w-7xl mx-auto px-10 xl:px-5">
          <div className="text-center py-20">
            <p className="text-lg">Tidak ada data Kepala Program tersedia.</p>
          </div>
        </div>
      </div>
    );
  }

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
                    alt={item.event}
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
