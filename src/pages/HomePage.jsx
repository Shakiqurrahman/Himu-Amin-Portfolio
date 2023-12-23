import Banner from "../components/Banner";
import RecentBlogs from "../components/RecentBlogs";
import TourBanner from "../components/TourBanner";

const HomePage = () => {
  return (
    <>
      <Banner />
      <RecentBlogs />
      <div className="my-20 mb-32">
        <TourBanner />
      </div>
    </>
  );
};

export default HomePage;
