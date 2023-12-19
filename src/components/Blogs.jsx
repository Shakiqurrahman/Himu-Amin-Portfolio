import React from 'react';
import { blogData } from '../data/dummyData';
import BlogCard from './BlogCard';

const Blogs = () => {
    return (
        <div className='max-width'>
            <div className='text-center'>
            <h6 className='uppercase tracking-widest'>Travel Blog</h6>
            <h2 className='uppercase text-[40px] font-bold mb-8'>Travel<span className='text-[#0067f6]'> Experience</span></h2>
            </div>
            <div className='grid sm:grid-cols-3 gap-10'>
                {
                    blogData.map(data => <BlogCard key={data.id} data={data}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;