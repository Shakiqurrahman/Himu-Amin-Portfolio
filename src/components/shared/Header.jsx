import { useState } from "react";
import logo from "../../assets/images/profile-logo.jpg";

const Header = () => {
  const [color, setColor] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const handleClose = () => {
    setIsActive(!isActive);
  }

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
      <div className=" flex m:justify-start justify-between  items-center h-16 max-width">
        <div className="flex gap-x-3 items-center">
          <img className="rounded-full w-12 h-12" src={logo} alt="logo" />
          <h1 className="sm:text-xl text-sm font-bold sm:text-inherit text-black font-mono">
            Himu <span>Amin</span>
          </h1>
        </div>
        <nav>
          <ul className={`${isActive ? 'flex flex-col absolute top-16 right-0 bg-blue-600 p-6 w-full text-center text-white gap-y-4 duration-300' : 'hidden' } md:flex gap-x-10 sm:text-inherit text-black font-mono`}>
            <li onClick={handleClose}>Home</li>
            <li onClick={handleClose}>Blogs</li>
            <li onClick={handleClose}>About</li>
            <li onClick={handleClose}>Contact</li>
          </ul>
          {/* <CiMenuFries className='md:hidden text-2xl sm:text-inherit text-black'/> */}
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
