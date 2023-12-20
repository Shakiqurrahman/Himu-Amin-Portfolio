import { FaLocationDot, FaPhoneVolume, FaXTwitter  } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { FaFacebookF, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className='bg-[#f4f5f8] pt-20 pb-8'>
            <div className="max-width">
            <div className="flex md:flex-row flex-col gap-6 justify-between pb-14 border-b border-gray-300">
                <div className="flex gap-4 items-center">
                <FaLocationDot className="text-[35px] text-white bg-blue-600 h-16 w-16 p-3 rounded-full"/>
                <span>
                <h3 className="text-xl font-semibold mb-1">Address</h3>
                <p className="hover:text-blue-600 duration-300">New York, USA</p>
                </span>
                </div>
                <div className="flex gap-4 items-center">
                <FaPhoneVolume className="text-[35px] text-white bg-blue-600 h-16 w-16 p-3 rounded-full"/>
                <span>
                <h3 className="text-xl font-semibold mb-1">Call Me</h3>
                <p className="hover:text-blue-600 duration-300">+1 (212) 470-7750</p>
                </span>
                </div>
                <div className="flex gap-4 items-center">
                <IoMdMailUnread className="text-[35px] text-white bg-blue-600 h-16 w-16 p-3 rounded-full"/>
                <span>
                <h3 className="text-xl font-semibold mb-1">Send Me Email</h3>
                <p className="hover:text-blue-600 duration-300">himuaminofficial@gmail.com</p>
                </span>
                </div>
            </div>
            <div className="flex justify-between mt-6">
                <p className="text-[12px]">© <a className="text-blue-600" href="">DevIT BD</a> - 2023 | All Rights Reserved</p>
                <div className="flex gap-4">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaXTwitter />
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;