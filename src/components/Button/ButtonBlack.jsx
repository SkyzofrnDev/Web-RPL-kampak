import React from "react";

const ButtonBlack = (props) => {
  return (
    <button className="buttonHitam py-2  rounded-full w-36 xl:w-44 xl:py-2 xl:px-7 xl:rounded-full bg-[#272727] text-white hover:bg-white hover:text-[#272727] ease-in-out duration-300 shadow-lg hover:border-2 hover:border-[#272727]">
      <p className="text-sm xl:text-lg font-semibold">{props.text}</p>
    </button>
  );
};

export default ButtonBlack;
