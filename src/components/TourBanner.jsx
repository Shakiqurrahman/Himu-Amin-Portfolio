import { Link } from 'react-router-dom';
import tourBanner from '../assets/images/tourImg.jpg'

const TourBanner = () => {
    return (
        <div>
            <div className='shape sm:block hidden'></div>
            <div className='flex md:flex-row flex-col justify-center max-width gap-x-16'>
            <div className='w-full relative'>
                <img className='w-[420px] max-w-[420px] h-[550px] rounded-t-[260px]' src={tourBanner} alt="tour banner image " />
                <div className='bg-[#f2efe8] rounded-top-right px-10 py-16 absolute sm:ml-[40%] md:top-[10rem] top-[14rem]'>
                    <h3 className='text-2xl mb-2'>6+ Tours</h3>
                    <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Maecenas massa porttitor lectus cursus nec. Ut pharetra metus nec lobortis imperdiet. Praesent iaculis lorem pharetra at med fermentum.</p>
                </div>
            </div>
            <div className='w-full md:mt-44 mt-14'>
                <p className='text-[#0067f6] uppercase mb-2'>Explore The World</p>
                <h3 className='text-[27px] mb-2 font-semibold text-[#001b46]'>Choose Your Destination</h3>
                <p>Quisque accumsan facilisiseleifend. Integer ultricies leo eros, non molestie lorem posuere eget. Fusce eget iaculis lorem. Phasellus ante metus, sodales pulvinar lectus in, pellentesque congue tortor</p>
                <button className='px-6 py-2 border border-black rounded-md font-semibold mt-6 hover:bg-[#0067f6] hover:text-white duration-300'><a href='https://patagoniaexplore.com/destination' target='blank'>See More</a></button>
            </div>
        </div>
        </div>
    );
};

export default TourBanner;