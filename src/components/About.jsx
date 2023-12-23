import aboutImg from '../assets/images/gallery/g-4.jpg'
const About = () => {
  return (
    <div className="max-width flex flex-col md:flex-row items-center gap-10">
      <div className='w-full'>
        <h1 className="sm:mb-2 text-[32px] sm:text-[45px] leading-10 font-bold uppercase">Hi, I'm Himu!</h1>
        <h1 className="text-[27px] sm:text-[40px] leading-10 font-bold uppercase">An <span className="text-blue-600">Entrepreneur</span></h1>
        <p className="text-justify mt-6">
          Hello there! I'm Himu Amin, an entrepreneur with a passion for
          exploring the world and creating unforgettable travel experiences. As
          the proud owner of Patagonia Explore Travel Agency, I've turned my
          love for travel into a thriving business that allows me to share the
          joy of discovering new destinations with others. </p> 
          <p className="text-justify mt-6">My journey as an
          entrepreneur began with a simple yet profound realization – life is
          too short to stay in one place. I've always been captivated by the
          diverse cultures, landscapes, and adventures our planet has to offer.
          This fascination led me to embark on my own explorations, and along
          the way, I discovered the power of travel to transform and enrich our
          lives.
        </p>
        <a ><button className='px-6 py-2 border border-black rounded-md font-semibold mt-6 hover:bg-[#0067f6] hover:text-white duration-300'>Download CV</button></a>
      </div>
      <div className='w-full'>
        <img className='rounded-2xl' src={aboutImg} alt="" />
      </div>
    </div>
  );
};

export default About;
