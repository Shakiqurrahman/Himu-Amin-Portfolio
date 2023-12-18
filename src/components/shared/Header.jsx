import { useState } from 'react';
import logo from '../../assets/profile-logo.jpg'

import { CiMenuFries } from "react-icons/ci";

const Header = () => {
    const [color, setColor] = useState(true);

    const changeColor = () => {
      if (window.scrollY <= 0) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor, true);

    return (
        <header className={`${color ? "text-white bg-white sm:bg-transparent" : "bg-white text-black duration-300"} fixed top-0 z-50 mx-auto w-full`}>
            <div className=' flex m:justify-start justify-between  items-center h-16 max-width'>
            <div className='flex gap-x-3 items-center'>
            <img className='rounded-full w-12 h-12' src={logo} alt="logo" />
            <h1 className='text-[18px] font-semibold sm:text-inherit text-black'>Himu <span>Amin</span></h1>
            </div>
            <nav>
                <ul className='md:flex hidden gap-x-10 sm:text-inherit text-black'>
                    <li>Home</li>
                    <li>Blogs</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <CiMenuFries className='md:hidden text-2xl sm:text-inherit text-black'/>
            </nav>
            </div>
        </header>
    );
};

export default Header;