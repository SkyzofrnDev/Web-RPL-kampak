import React from "react";
import { Link } from "react-router-dom";

const dataNav = [
  { name: "IDENTITAS", linkTo: "/" },
  { name: "SEJARAH", linkTo: "/" },
  { name: "VISI MISI", linkTo: "/" },
  { name: "PRESTASI", linkTo: "/" },
  { name: "PEMBELAJARAN", linkTo: "/" },
  { name: "STRUKTUR", linkTo: "/" },
  { name: "PARTNERSHIP", linkTo: "/" },
];

const Navbar = () => {
  return (
    <div className="flex justify-center">
    <div className=" z-10 fixed w-max mt-10 px-10 mx-20 py-4 text-white bg-gray-200/50 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60  border-gray-100">
      <div className="flex text-xl font-bold w-full justify-evenly">
        <img src="/Assets/LogoRPL.png" alt="logo-rpl" className="absolute -top-4 left-6 w-24"/>
        {dataNav.map((item, index) => (
          <Link className="ml-24" key={index} to={item.linkTo}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
