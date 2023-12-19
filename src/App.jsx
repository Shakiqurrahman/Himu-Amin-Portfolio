import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import TourBanner from "./components/TourBanner";
import Header from "./components/shared/Header";
import SocialMedias from "./components/shared/SocialMedias";

const App = () => {
  return (
    <>
      <Header />
      <SocialMedias />
      <Banner />
      <Blogs />
      <div className="my-20">
      <TourBanner />
      </div>
    </>
  );
};

export default App;