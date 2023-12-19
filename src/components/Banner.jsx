import banner from '../assets/images/bannerImg.jpg'

const Banner = () => {
    return (
        <div className='md:h-[130vh] sm:h-[80vh] h-[60vh] sm:pt-0 pt-16'>
            <img className='w-full h-full object-cover object-bottom' src={banner} alt="" />
        </div>
    );
};

export default Banner;