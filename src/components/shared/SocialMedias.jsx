import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SocialMedias = () => {
  return (
    <div className="fixed hidden sm:block z-50 top-[45%] md:right-8 right-4">
      <div className="w-12 h-12 bg-[#0067f6] hover:bg-white hover:text-[#0067f6] border border-transparent hover:border-[#0067f6] duration-300 rounded-sm mb-3 flex items-center justify-center text-white">
        <Link to='https://www.facebook.com/himuaminofficial?mibextid=gik2fB' target="blank"><FaFacebookF size={30} /></Link>
      </div>
      <div className="w-12 h-12 bg-[#0067f6] hover:bg-white hover:text-[#0067f6] border border-transparent hover:border-[#0067f6] duration-300  rounded-sm mb-3 flex items-center justify-center text-white">
        <Link to='https://www.instagram.com/himuamin_official?igshid=NGVhN2U2NjQ0Yg%3D%3D' target="blank"><FaInstagram size={30} /></Link>
      </div>
      <div className="w-12 h-12 bg-[#0067f6] hover:bg-white hover:text-[#0067f6] border border-transparent hover:border-[#0067f6]  duration-300 rounded-sm  flex items-center justify-center text-white">
        <Link to='https://twitter.com/himuamin_offic' target="blank"><FaXTwitter size={30} /></Link>
      </div>
    </div>
  );
};

export default SocialMedias;
