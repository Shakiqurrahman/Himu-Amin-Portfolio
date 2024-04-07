import { Link } from 'react-router-dom';
import { blogData } from '../data/dummyData';
import BlogCard from './BlogCard';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const RecentBlogs = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    const recentblogsData = blogData.filter(data => data.isRecent === true);
    return (
        <div className='max-width'>
            <div className='text-center'>
            <h6 data-aos='fade-down' data-aos-duration="700" className='uppercase tracking-widest sm:text-[14px] text-[12px] sm:mb-2'>Recent Travel Blogs</h6>
            <h2  data-aos='fade-up' data-aos-duration="700" className='uppercase sm:text-[40px] text-2xl font-bold mb-8 text-[#001b46]'>Travel<span className='text-[#0067f6]'> Experience</span></h2>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {
                    recentblogsData.map(data => <BlogCard key={data.id} data={data}></BlogCard>)
                }
            </div>
            <Link className='flex justify-center mt-6' to='/blogs'><button className='px-6 py-2 border border-black rounded-md font-semibold mt-6 hover:bg-[#0067f6] hover:text-white duration-300'>See More</button></Link>
        </div>
    );
};

export default RecentBlogs;