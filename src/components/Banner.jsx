import banner from '../assets/Banner/banner.jpg'

const Banner = () => {
    return (
        <div className='sm:h-[120vh sm:h-full h-[50vh] sm:mt-0 mt-16'>
            <img className='w-full h-full object-cover' src={banner} alt="" />
            <div className=' h-[150vh]'>
            </div>
        </div>
    );
};

export default Banner;