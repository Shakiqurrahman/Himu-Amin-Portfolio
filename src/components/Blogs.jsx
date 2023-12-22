import { blogData } from '../data/dummyData';
import BlogCard from './BlogCard';

const Blogs = () => {
    return (
        <div className='max-width'>
            <div className='text-center'>
            <h6 className='uppercase tracking-widest sm:text-[14px] text-[12px] sm:mb-2'>Recent Travel Blog</h6>
            <h2 className='uppercase sm:text-[40px] text-2xl font-bold mb-8 text-[#001b46]'>Travel<span className='text-[#0067f6]'> Experience</span></h2>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
                {
                    blogData.map(data => <BlogCard key={data.id} data={data}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;