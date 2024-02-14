import { useParams } from "react-router-dom";
import { blogData } from "../data/dummyData";
import BlogDetails from "../components/BlogDetails";
import { IoCalendar } from "react-icons/io5";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const details = blogData.find((x) => x.id === id);
  return (
    <section>
            <div className="b-shape">
            <div className="sm:pt-[160px] pt-[160px] sm:pb-[107px] pb-[77px] max-width">
            <div className="">
            <p className="text-blue-600 tracking-[5px] uppercase text-[13px] mb-1">Blog Details</p>
            <h1 className="text-white sm:text-[40px] text-lg font-bold  leading-snug mb-4 w-2/3 uppercase">{details.title}</h1>
            <p className="text-white flex items-center gap-2"><IoCalendar></IoCalendar>{details.fullDate}</p>
            </div>
            </div>
            </div>
            <BlogDetails details={details}/>
        
        </section>
  );
};

export default BlogDetailsPage;
