import { Link } from "react-router-dom";
import About from "../components/About";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <div className="b-shape">
        <div className="flex sm:pt-[180px] pt-[160px] sm:pb-[117px] pb-[77px] items-center justify-between max-width">
          <h1 data-aos='fade-right' data-aos-duration="800"  className="text-white sm:text-[40px] text-xl font-bold pl-10 sm:pl-20">
            About Me
          </h1>
          <p data-aos='fade-left' data-aos-duration="800"  className="text-white text-[12px] sm:text-[16px] pr-10 sm:pr-20 font-semibold font-mono">
            <Link className="hover:text-[#0067f6] duration-300" to="/">
              Home{" "}
            </Link>
            -<span className="text-[#0067f6]"> About</span>
          </p>
        </div>
      </div>
      <div className="my-24">
        <About />
      </div>
    </section>
  );
};

export default AboutPage;
