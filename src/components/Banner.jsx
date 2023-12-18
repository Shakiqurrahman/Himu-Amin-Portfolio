import img1 from '../assets/Banner/banner.jpg'

const Banner = () => {
    return (
        <div className='md:h-full h-[70vh]'>
            <img className='w-full h-full object-cover' src={img1} alt="" />
        </div>
    );
};

export default Banner;