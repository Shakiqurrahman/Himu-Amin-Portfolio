import Banner from "./components/Banner";
import TourBanner from "./components/TourBanner";
import Header from "./components/shared/Header";
import SocialMedias from "./components/shared/SocialMedias";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <SocialMedias />
      <div className="my-10">
      <TourBanner />
      </div>
    </>
  );
};

export default App;