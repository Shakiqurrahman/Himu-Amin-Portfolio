import { Link } from "react-router-dom";
import img1 from "../assets/images/gallery/g-1.jpg";
import img10 from "../assets/images/gallery/g-10.jpg";
import img11 from "../assets/images/gallery/g-11.jpg";
import img12 from "../assets/images/gallery/g-12.jpg";
import img13 from "../assets/images/gallery/g-13.jpg";
import img14 from "../assets/images/gallery/g-14.jpg";
import img15 from "../assets/images/gallery/g-15.jpg";
import img2 from "../assets/images/gallery/g-2.jpg";
import img3 from "../assets/images/gallery/g-3.jpg";
import img4 from "../assets/images/gallery/g-4.jpg";
import img5 from "../assets/images/gallery/g-5.jpg";
import img6 from "../assets/images/gallery/g-6.jpg";
import img7 from "../assets/images/gallery/g-7.jpg";
import img8 from "../assets/images/gallery/g-8.jpg";
import img9 from "../assets/images/gallery/g-9.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const GalleryPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <div className="b-shape">
        <div className="flex sm:pt-[180px] pt-[160px] sm:pb-[117px] pb-[77px] items-center justify-between max-width">
          <h1 data-aos='fade-right' data-aos-duration="800"  className="text-white sm:text-[40px] text-xl font-bold pl-10 sm:pl-20">
            Gallery
          </h1>
          <p data-aos='fade-left' data-aos-duration="800"  className="text-white text-[12px] sm:text-[16px] pr-10 sm:pr-20 font-semibold font-mono">
            <Link className="hover:text-[#0067f6] duration-300" to="/">
              Home{" "}
            </Link>
            -<span className="text-[#0067f6]"> Gallery</span>
          </p>
        </div>
      </div>
      <div className="max-width my-20 flex flex-col gap-8" >
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="overflow-hidden" data-aos='zoom-in-up' data-aos-duration="800" >
            <img
              className="hover:scale-110 duration-300 w-full"
              src={img1}
              alt=""
            />
          </div>
          <div className="overflow-hidden" data-aos='zoom-in-up' data-aos-duration="800" >
            <img
              className="hover:scale-110 duration-300 w-full"
              src={img2}
              alt=""
            />
          </div>
          <div className="overflow-hidden" data-aos='zoom-in-up' data-aos-duration="800" >
            <img
              className="hover:scale-110 duration-300 w-full"
              src={img3}
              alt=""
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="overflow-hidden" data-aos='zoom-in-up' data-aos-duration="800" >
            <img className="hover:scale-110 duration-300" src={img4} alt="" />
          </div>
          <div className="overflow-hidden" data-aos='zoom-in-up' data-aos-duration="800" >
            <img className="hover:scale-110 duration-300" src={img5} alt="" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="overflow-hidden" data-aos='zoom-in-up' data-aos-duration="800" >
            <img
              className="hover:scale-110 duration-300 w-full"
              src={img6}
              alt=""
            />
          </div>
          <div className="overflow-hidden" data-aos='zoom-in-up' data-aos-duration="800" >
            <img
              className="hover:scale-110 duration-300 w-full"
              src={img7}
              alt=""
            />
          </div>
          <div className="overflow-hidden" data-aos='zoom-in-up' data-aos-duration="800" >
            <img
              className="hover:scale-110 duration-300 w-full"
              src={img10}
              alt=""
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="overflow-hidden" data-aos='zoom-in-up' data-aos-duration="800" >
            <img className="hover:scale-110 duration-300" src={img8} alt="" />
          </div>
          <div className="overflow-hidden" data-aos='zoom-in-up' data-aos-duration="800" >
            <img className="hover:scale-110 duration-300" src={img9} alt="" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="overflow-hidden" data-aos='zoom-in-up' data-aos-duration="800" >
            <img
              className="hover:scale-110 duration-300 w-full"
              src={img11}
              alt=""
            />
          </div>
          <div className="overflow-hidden" data-aos='zoom-in-up' data-aos-duration="800" >
            <img
              className="hover:scale-110 duration-300 w-full"
              src={img15}
              alt=""
            />
          </div>
          <div className="overflow-hidden" data-aos='zoom-in-up' data-aos-duration="800" >
            <img
              className="hover:scale-110 duration-300 w-full"
              src={img13}
              alt=""
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="overflow-hidden" data-aos='zoom-in-up' data-aos-duration="800" >
            <img className="hover:scale-110 duration-300" src={img14} alt="" />
          </div>
          <div className="overflow-hidden" data-aos='zoom-in-up' data-aos-duration="800" >
            <img className="hover:scale-110 duration-300" src={img12} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
