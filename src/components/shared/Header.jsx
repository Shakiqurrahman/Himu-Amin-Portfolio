import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

const Header = () => {
  const [color, setColor] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const handleClose = () => {
    setIsActive(false);
  };

  const changeColor = () => {
    if (window.scrollY <= 0) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor, true);

  return (
    <header
      className={`${
        color
          ? "text-white bg-white sm:bg-transparent"
          : "bg-white text-black duration-300"
      } fixed top-0 z-50 mx-auto w-full`}
    >
      <div className="flex m:justify-start justify-between  items-center h-16 max-width">
        <div className="flex gap-x-3 items-center">
          <img className="rounded-full w-12 h-12" src={logo} alt="logo" />
          <h1 className="sm:text-lg text-md sm:font-bold font-bold sm:text-inherit tracking-wider text-black font-poppins">
            Himu <span>Amin</span>
          </h1>
        </div>
        <nav>
          <ul
            className={`${
              isActive
                ? "flex flex-col absolute top-16 right-0 bg-[#0067f6] p-6 w-full text-center text-white gap-y-5 duration-300"
                : "hidden"
            } md:flex gap-x-10 sm:text-inherit text-black font-poppins text-md sm:text-sm tracking-wider font-semibold`}
          >
            <li
              className={`${
                color ? "hover:text-black" : "hover:text-[#0067f6]"
              } ${isActive ? "hover:text-black" : ""}`}
              onClick={handleClose}
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              className={`${
                color ? "hover:text-black" : "hover:text-[#0067f6]"
              } ${isActive ? "hover:text-black" : ""}`}
              onClick={handleClose}
            >
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li
              className={`${
                color ? "hover:text-black" : "hover:text-[#0067f6]"
              } ${isActive ? "hover:text-black" : ""}`}
              onClick={handleClose}
            >
              <NavLink to="/about">About</NavLink>
            </li>
            <li
              className={`${
                color ? "hover:text-black" : "hover:text-[#0067f6]"
              } ${isActive ? "hover:text-black" : ""}`}
              onClick={handleClose}
            >
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li
              className={`${
                color ? "hover:text-black" : "hover:text-[#0067f6]"
              } ${isActive ? "hover:text-black" : ""}`}
              onClick={handleClose}
            >
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="hamburger md:hidden"
          >
            <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
