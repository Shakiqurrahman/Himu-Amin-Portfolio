import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import TourBanner from "../components/TourBanner";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Blogs />
      <div className="my-20 mb-32">
        <TourBanner />
      </div>
    </>
  );
};

export default HomePage;
