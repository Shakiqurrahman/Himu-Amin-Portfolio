import { FaLocationDot, FaXTwitter  } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className='bg-[#f4f5f8] pt-20 pb-8'>
            <div className="max-width">
            <div className="flex md:flex-row flex-col gap-6 justify-between pb-10 sm:pb-14 border-b border-gray-300">
                <div className="flex gap-4 items-center">
                <div className="bg-blue-600 sm:h-16 h-12 sm:w-16 w-12 rounded-full flex justify-center items-center"><FaLocationDot className="text-2xl sm:text-[35px] text-white"/></div>
                <span>
                <h3 className="sm:text-xl text-lg font-semibold sm:mb-1">Address</h3>
                <p className="hover:text-blue-600 duration-300"><a
                  href="https://maps.app.goo.gl/kWt2jtgyUTVtwBDEA"
                  target="blank"
                >New York, USA</a></p>
                </span>
                </div>
                <div className="flex gap-4 items-center">
                <div className="bg-blue-600 sm:h-16 h-12 sm:w-16 w-12 rounded-full flex justify-center items-center"><AiFillMessage className="text-2xl sm:text-[35px] text-white"/></div>
                <span>
                <h3 className="sm:text-xl text-lg font-semibold sm:mb-1">Message Me</h3>
                <p className="hover:text-blue-600 duration-300"><a href="https://www.facebook.com/himuaminofficial?mibextid=gik2fB" target="blank">On Facebook</a></p>
                </span>
                </div>
                <div className="flex gap-4 items-center">
                <div className="bg-blue-600 sm:h-16 h-12 sm:w-16 w-12 rounded-full flex justify-center items-center"><IoMdMailUnread className="text-2xl sm:text-[35px] text-white"/></div>
                <span>
                <h3 className="sm:text-xl text-lg font-semibold sm:mb-1">Send Me Email</h3>
                <p className="hover:text-blue-600 duration-300"><a href="mailto:himuaminofficial@gmail.com">himuaminofficial@gmail.com</a></p>
                </span>
                </div>
            </div>
            <div className="flex justify-between mt-6">
                <p className="text-[12px]">© <a className="text-blue-600" href="https://shakiqur-rahman.netlify.app/#" target="blank">Shake</a> - 2023 | All Rights Reserved</p>
                <div className="flex gap-4">
                    <Link className="hover:text-blue-600 duration-300 px-1" to='https://www.facebook.com/himuaminofficial?mibextid=gik2fB' target="blank"><FaFacebookF /></Link>
                    <Link className="hover:text-blue-600 duration-300 px-1" to='https://www.instagram.com/himuamin_official?igshid=NGVhN2U2NjQ0Yg%3D%3D' target="blank"><FaInstagram /></Link>
                    <Link className="hover:text-blue-600 duration-300 px-1" to='https://twitter.com/himuamin_offic' target="blank"><FaXTwitter /></Link>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;