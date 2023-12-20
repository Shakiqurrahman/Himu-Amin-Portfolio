const BlogCard = ({data}) => {
    return (
        <div className='mb-16 relative group'>
            <div className='relative'>
           <div className='overflow-hidden bg-black'>
           <img className='group-hover:scale-110 duration-500 group-hover:opacity-80' src={data?.img} alt="" />
           </div>
            <div className='bg-[#0067f6] text-white px-3 py-2 absolute top-5 left-5 uppercase flex flex-col items-center'>
                <span className='text-[12px] font-semibold'>{data.month}</span>
                <span className='font-bold'>{data.date}</span>
            </div>
            </div>
            <div className='bg-[#001b46] text-white p-7 mx-4 absolute -bottom-16 group-hover:bottom-5 duration-300'>
                <p className='tracking-widest text-[#00f8fe] mb-2'>Blog</p>
                <h2 className='text-[18px]'>{data.title}</h2>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default BlogCard;