import React from "react";

const ButtonWhite = (props) => {
  return (
    <button className="py-2 px-5 rounded-full mt-10 xl:py-2 xl:px-7 xl:rounded-full bg-white text-[#272727] hover:bg-[#272727] hover:text-white ease-in-out duration-300 shadow-lg">
      <p className="text-sm xl:text-lg font-semibold buttonPutih">
        {props.text}
      </p>
    </button>
  );
};
export default ButtonWhite;
