import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { blogData } from "../data/dummyData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BlogsPage = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <section>
      <div  className="b-shape">
        <div className="flex sm:pt-[180px] pt-[160px] sm:pb-[117px] pb-[77px] items-center justify-between max-width">
          <h1  data-aos='fade-right' data-aos-duration="800" className="text-white sm:text-[40px] text-xl font-bold pl-10 sm:pl-20">
            Blogs
          </h1>
          <p  data-aos='fade-left' data-aos-duration="800" className="text-white text-[12px] sm:text-[16px] pr-10 sm:pr-20 font-semibold font-mono">
            <Link className="hover:text-[#0067f6] duration-300" to="/">
              Home{" "}
            </Link>
            -<span className="text-[#0067f6]"> Blogs</span>
          </p>
        </div>
      </div>
      <div className="max-width my-20">
        <div className="text-center">
          <h6 data-aos='fade-down' data-aos-duration="300"  className="uppercase tracking-widest sm:text-[14px] text-[12px] sm:mb-2">
            Travel Blogs
          </h6>
          <h2 data-aos='fade-up' data-aos-duration="800"  className="uppercase sm:text-[40px] text-2xl font-bold mb-8 text-[#001b46]">
            Travel<span className="text-[#0067f6]"> Experience</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {blogData.map((data) => (
            <BlogCard key={data.id} data={data}></BlogCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
