import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { ButtonWhite } from "../../components/Index";

const Herosection = () => {
  const [isFirstImage, setIsFirstImage] = useState(true);
  
  // Default images that will be shown initially
  const defaultImages = ["/RplBuilding/1.png", "/RplBuilding/2.png"];
  
  // State for API images
  const [backgroundImages, setBackgroundImages] = useState(defaultImages);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiImagesLoaded, setApiImagesLoaded] = useState(false);

  // Fetch background images from API
  useEffect(() => {
    const fetchBackgroundImages = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/background');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Extract image URLs from API response
        const imageUrls = data.map(item => `http://127.0.0.1:8000/storage/${item.image}`);
        
        // Remove duplicates and ensure we have at least 2 images
        const uniqueImages = [...new Set(imageUrls)];
        
        if (uniqueImages.length >= 2) {
          // Successfully loaded API images, replace default images
          setBackgroundImages(uniqueImages.slice(0, 2));
          setApiImagesLoaded(true);
        } else if (uniqueImages.length === 1) {
          // If only one image, duplicate it for the slideshow
          setBackgroundImages([uniqueImages[0], uniqueImages[0]]);
          setApiImagesLoaded(true);
        } else {
          // No images from API, keep using default images
          console.log('No images found in API response, using default images');
        }
        
        setError(null);
      } catch (err) {
        console.error('Error fetching background images:', err);
        setError(err.message);
        // Keep using default images on error, no need to change state
      }
    };

    // Fetch API images in the background (no loading state needed)
    fetchBackgroundImages();
  }, []);

  // Image slideshow effect
  useEffect(() => {
    if (backgroundImages.length > 1) {
      const interval = setInterval(() => {
        setIsFirstImage((prev) => !prev); 
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [backgroundImages]);

  return (
    <div
      className="h-[100vh] md:h-[110vh] hero-container relative w-full xl:h-[110vh] overflow-hidden"
      id="#"
    >
    
      <div
        className="w-full h-full relative"
        style={{
          WebkitMaskImage: "url('/RplBuilding/Union-Home.svg')", // Path to SVG
          maskImage: "url('/RplBuilding/Union-Home.svg')", // Path to SVG
          WebkitMaskSize: "cover", // Menggunakan cover agar mask penuh
          maskSize: "cover", // Menggunakan cover agar mask penuh
          WebkitMaskRepeat: "no-repeat", // Prevent repeat
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center", // Center mask
          maskPosition: "center",
        }}
      >
        {/* First Image */}
        {backgroundImages.length > 0 && (
          <div
            className={`brightness-50 absolute inset-0 transition-opacity duration-1000 ${
              isFirstImage ? "opacity-100" : "opacity-0"
            } bg-cover bg-center`}
            style={{
              backgroundImage: `url('${backgroundImages[0]}')`,
            }}
          ></div>
        )}

        {/* Second Image */}
        {backgroundImages.length > 1 && (
          <div
            className={`brightness-50 absolute inset-0 transition-opacity duration-1000 ${
              isFirstImage ? "opacity-0" : "opacity-100"
            } bg-cover bg-center`}
            style={{
              backgroundImage: `url('${backgroundImages[1]}')`,
            }}
          ></div>
        )}

        {/* Subtle indicator when API images are loaded */}
        {apiImagesLoaded && (
          // <div className="absolute top-4 right-4 bg-green-500 bg-opacity-20 text-white px-2 py-1 rounded text-xs">
          //   ✓ Updated from API
          // </div>
          console.log("✓ Updated from API")
        )}
      </div>

      {/* Overlay Content */}
      <div className="absolute top-[52%] transform -translate-y-1/2 left-10 h-[35%]">
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

          {/* Button */}
          <div className="items-end">
            <a href="#identity">
              <ButtonWhite text="Selanjutnya" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
