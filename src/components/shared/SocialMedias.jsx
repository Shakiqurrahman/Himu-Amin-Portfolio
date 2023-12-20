import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const SocialMedias = () => {
    return (
        <div className="fixed z-50 top-[45%] md:right-8 right-4">
            <div className="w-12 h-12 bg-[#0067f6] hover:bg-white hover:text-[#0067f6] border border-transparent hover:border-[#0067f6] duration-300 rounded-sm mb-3 flex items-center justify-center text-white"><FaFacebookF size={30} /></div>
            <div className="w-12 h-12 bg-[#0067f6] hover:bg-white hover:text-[#0067f6] border border-transparent hover:border-[#0067f6] duration-300  rounded-sm mb-3 flex items-center justify-center text-white"><FaInstagram size={30} /></div>
            <div className="w-12 h-12 bg-[#0067f6] hover:bg-white hover:text-[#0067f6] border border-transparent hover:border-[#0067f6]  duration-300 rounded-sm  flex items-center justify-center text-white"><FaXTwitter size={30} /></div>
        </div>
    );
};

export default SocialMedias;