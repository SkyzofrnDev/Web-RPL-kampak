/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef(null);
  const [currentSection, setCurrentSection] = useState("home");

  const handleScroll = () => {
    const sections = [
      "home",
      "identity",
      "history",
      "visi-misi",
      "achivments",
      "core-skill",
      "technology",
      "workforce",
      "partnership",
    ];
    const scrollPosition = window.scrollY;

    // Handle navbar visibility based on scroll direction
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setNavbarVisible(false);
    } else {
      setNavbarVisible(true);
    }

    // Close mobile menu on scroll
    if (isMenuOpen && window.innerWidth <= 1024) {
      setMenuOpen(false);
    }

    // Detect current section
    let currentSectionFound = "home"; // default to home
    
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop - 100; // Add offset for navbar height
        const sectionHeight = sectionElement.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSectionFound = section;
        }
      }
    });

    // Special case for when we're at the very top
    if (scrollPosition < 50) {
      currentSectionFound = "home";
    }

    setCurrentSection(currentSectionFound);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen, lastScrollY]);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
    animateDropdownIn();
  };

  const handleMouseLeave = () => {
    animateDropdownOut(() => setDropdownVisible(false));
  };

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu after navigation
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };

  const animateDropdownIn = () => {
    const dropdown = dropdownRef.current;
    dropdown.style.display = "block";
    dropdown.style.opacity = 0;
    dropdown.style.transform = "translateY(-10px)";
    let start = null;
  
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      dropdown.style.opacity = Math.min(progress / 300, 1);
      dropdown.style.transform = `translateY(${Math.min((progress / 300) * 10, 0)}px)`;
      if (progress < 300) {
        requestAnimationFrame(step);
      }
    };
  
    requestAnimationFrame(step);
  };
  

  const animateDropdownOut = (callback) => {
    const dropdown = dropdownRef.current;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      dropdown.style.opacity = Math.max(1 - progress / 300, 0);
      dropdown.style.transform = `translateY(${Math.min(
        (progress / 300) * 20,
        20
      )}px)`;
      if (progress < 300) {
        requestAnimationFrame(step);
      } else {
        dropdown.style.display = "none";
        if (callback) callback();
      }
    };

    requestAnimationFrame(step);
  };
    

  const dropdownContent = () => {
    const classContent = [
      { name: "X RPL 1", path: "/Classroom/ClassXrpl1" },
      { name: "X RPL 2", path: "/Classroom/ClassXrpl2" },
      { name: "XI RPL 1", path: "/Classroom/ClassXIrpl1" },
      { name: "XI RPL 2", path: "/Classroom/ClassXIrpl2" },
      { name: "XII RPL 1", path: "/Classroom/ClassXIIRpl1" },
      { name: "XII RPL 2", path: "/Classroom/ClassXIIRpl2" },
    ];

    return classContent.map((item, index) => (
      <Link to={item.path} key={index}>
        <p className="dropdown-item rounded-lg font-semibold w-[190px] border-4 border-black mx-2 my-3 px-2 py-2 flex justify-between items-center">
          {item.name}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="hover-icon"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </p>
      </Link>
    ));
  };

  return (
    <div
      className={`fixed top-0 z-50 justify-center flex w-full transition-all duration-300`}
    >
      <div
        className={`flex flex-col items-end lg:block fixed lg:top-10 lg:mx-10 z-50 w-full lg:w-[96vw] transition-transform duration-300`}
      >
        {/* Header */}
        <div className=" hidden xl:flex py-1 px-2 lg:p-5 bg-[#b2b2b2ef]/70 rounded-xl  items-center justify-between backdrop-blur-[3px]">
          <div className="flex lg:absolute items-center gap-3 lg:gap-0">
            <img
              src="/Assets/LogoRPL.png"
              alt="logo rpl"
              className="w-[60px] lg:w-24"
            />
            <p className="block lg:hidden poppins-medium">
              Rekayasa Perangkat Lunak
            </p>
          </div>

          <div className="flex lg:ml-28 lg:justify-center lg:w-full">
            <ul className="navbar w-full flex justify-between gap-x-5 list-none poppins-medium text-[#ffff] lg:text-lg font-semibold">
              <li
                className={`cursor-pointer ${
                  currentSection === "home"
                    ? "font-bold text-[#272727] underline"
                    : ""
                }`}
                onClick={() => scrollToSection("home")}
              >
                HOME
              </li>
              <li
                className={`cursor-pointer ${
                  currentSection === "identity"
                    ? "font-bold text-[#272727] underline"
                    : ""
                }`}
                onClick={() => scrollToSection("identity")}
              >
                IDENTITY
              </li>
              <li
                className={`cursor-pointer ${
                  currentSection === "history"
                    ? "font-bold text-[#272727] underline"
                    : ""
                }`}
                onClick={() => scrollToSection("history")}
              >
                HISTORY
              </li>
              <li
                className={`cursor-pointer ${
                  currentSection === "visi-misi"
                    ? "font-bold text-[#272727] underline"
                    : ""
                }`}
                onClick={() => scrollToSection("visi-misi")}
              >
                VISI MISI
              </li>
              <li
                className={`cursor-pointer ${
                  currentSection === "achivments"
                    ? "font-bold text-[#272727] underline"
                    : ""
                }`}
                onClick={() => scrollToSection("achivments")}
              >
                ACHIVMENTS
              </li>
              <li
                className={`cursor-pointer ${
                  currentSection === "technology"
                    ? "font-bold text-[#272727] underline"
                    : ""
                }`}
                onClick={() => scrollToSection("technology")}
              >
                SILABUS
              </li>
              <li
                className={`cursor-pointer ${
                  currentSection === "core-skill"
                    ? "font-bold text-[#272727] underline"
                    : ""
                }`}
                onClick={() => scrollToSection("core-skill")}
              >
                CORE SKILL
              </li>
              <li
                className={`cursor-pointer ${
                  currentSection === "workforce"
                    ? "font-bold text-[#272727] underline"
                    : ""
                }`}
                onClick={() => scrollToSection("workforce")}
              >
                WORKFORCE
              </li>
              <li
                className={`cursor-pointer ${
                  currentSection === "partnership"
                    ? "font-bold text-[#272727] underline"
                    : ""
                }`}
                onClick={() => scrollToSection("partnership")}
              >
                PARTNERSHIP
              </li>

            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="xl:hidden bg-black/50 w-full py-3  px-4 backdrop-blur-[4px] flex items-center justify-between ">
          <div className="flex text-white items-center">
            <img
              src="/assets/logo-rpl.png"
              alt="Logo RPL"
              className="w-10 md:w-16"
            />
            <div className=" ml-5">
              <p className="text-sm md:text-xl lg:text-2xl font-semibold">
                REKAYASA PERANGKAT LUNAK
              </p>
              <p className="text-xs md:text-sm lg:ext-xl font-semibold">
                SMKN 1 CIBINONG
              </p>
            </div>
          </div>
          <div className="w-[15%] mr-0 flex justify-end lg:hidden">
            <button
              onClick={handleToggleMenu}
              className="bg-[#222222] p-2.5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <svg
                className="w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
                color="white"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="w-[40%] mx-2 lg:hidden bg-[#b2b2b2ef]/70 backdrop-blur-[3px] rounded-xl p-4 mt-2 transition-transform duration-300">
            <ul className="navbar flex flex-col gap-y-2 text-[#272727] font-semibold poppins-medium text-sm">
              <li
                className={`cursor-pointer ${
                  currentSection === "home" ? "font-bold" : ""
                } outline-1 outline-[#272727] rounded-md p-2`}
                onClick={() => scrollToSection("home")}
              >
                HOME
              </li>
              <li
                className={`cursor-pointer ${
                  currentSection === "identity" ? "font-bold" : ""
                } outline-1 outline-[#272727] rounded-md p-2`}
                onClick={() => scrollToSection("identity")}
              >
                IDENTITY
              </li>
              <li
                className={`cursor-pointer ${
                  currentSection === "history" ? "font-bold" : ""
                } outline-1 outline-[#272727] rounded-md p-2`}
                onClick={() => scrollToSection("history")}
              >
                HISTORY
              </li>
              <li
                className={`cursor-pointer ${
                  currentSection === "visi-misi" ? "font-bold" : ""
                } outline-1 outline-[#272727] rounded-md p-2`}
                onClick={() => scrollToSection("visi-misi")}
              >
                VISI MISI
              </li>
              <li
                className={`cursor-pointer ${
                  currentSection === "achivments" ? "font-bold" : ""
                } outline-1 outline-[#272727] rounded-md p-2`}
                onClick={() => scrollToSection("achivments")}
              >
                ACHIVMENTS
              </li>
              <li
                className={`cursor-pointer ${
                  currentSection === "technology" ? "font-bold" : ""
                } outline-1 outline-[#272727] rounded-md p-2`}
                onClick={() => scrollToSection("technology")}
              >
                TECHNOLOGY
              </li>
              <li
                className={`cursor-pointer ${
                  currentSection === "core-skill" ? "font-bold" : ""
                } outline-1 outline-[#272727] rounded-md p-2`}
                onClick={() => scrollToSection("core-skill")}
              >
                CORE SKILL
              </li>
              <li
                className={`cursor-pointer ${
                  currentSection === "workforce" ? "font-bold" : ""
                } outline-1 outline-[#272727] rounded-md p-2`}
                onClick={() => scrollToSection("workforce")}
              >
                WORKFORCE
              </li>
              <li
                className={`cursor-pointer ${
                  currentSection === "partnership" ? "font-bold" : ""
                } outline-1 outline-[#272727] rounded-md p-2`}
                onClick={() => scrollToSection("partnership")}
              >
                PARTNERSHIP
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

