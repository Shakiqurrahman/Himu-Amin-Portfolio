import banner from '../assets/Banner/banner.jpg'

const Banner = () => {
    return (
        <div className='md:h-full h-[50vh]'>
            <img className='w-full h-full object-cover' src={banner} alt="" />
        </div>
    );
};

export default Banner;