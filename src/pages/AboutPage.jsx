import { Link } from "react-router-dom";
import About from "../components/About";

const AboutPage = () => {
    return (
        <section>
          <div className="b-shape">
            <div className="flex sm:pt-[180px] pt-[160px] sm:pb-[117px] pb-[77px] items-center justify-between max-width">
            <h1 className="text-white sm:text-[40px] text-xl font-bold pl-10 sm:pl-20">About Me</h1>
            <p className="text-white text-[12px] sm:text-[16px] pr-10 sm:pr-20 font-semibold font-mono"><Link className="hover:text-[#0067f6] duration-300" to='/'>Home </Link>-<span className="text-[#0067f6]"> About</span></p>
            </div>
            </div> 
            <div className="my-24">
            <About />
            </div>
        </section>
    );
};

export default AboutPage;