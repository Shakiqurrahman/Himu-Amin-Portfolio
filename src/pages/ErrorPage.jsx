import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import errorImg from "../assets/images/error.webp";
const ErrorPage = () => {

  return (
    <div className="h-[100vh]  flex flex-col justify-center items-center">
      <img className="sm:w-1/3 w-4/5" src={errorImg} alt="" />
      <p className="text-2xl">This Page is not available</p>
      <Link to="/">
        <button className="bg-[#0989ff] text-white px-5 py-3 text-xl mt-5 rounded-xl border border-transparent flex items-center duration-300 hover:text-[#0989ff] hover:bg-white hover:border-[#0989ff]">
          Go Back <BsArrowRight className="ml-3" />
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;