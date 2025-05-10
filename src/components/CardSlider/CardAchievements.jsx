import React, { useState, useEffect, useRef } from "react";
import "./Style.css"
const CardAchievements = ({ title, desc, image }) => {
  const [insetValue, setInsetValue] = useState(30);
  const pRef = useRef(null);
  const handleMouseEnter = () => {
    if (pRef.current) {
      const pHeight = pRef.current.offsetHeight;
      setInsetValue(pHeight + 20);
    }
  };
  const handleMouseLeave = () => {
    setInsetValue(30); // nilai default
  };
  

    return (
<div
  className="card"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>

      <img src={image} alt="dokumentasi" />
      <div className="card-content">
        <h2
          className="font-semibold text-xl"
          style={{
            inset: `auto auto ${insetValue}px 30px`,
          }}
        >
          {title}
        </h2>
        <p ref={pRef}>{desc}</p>
      </div>
    </div>
    );
  };
  
  export default CardAchievements;
  