import { Link } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCalendar, IoShareSocial } from "react-icons/io5";

const BlogDetails = ({ details }) => {
  return (
    <div className="max-width my-20">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-2/3">
          <img className="rounded-lg" src={details.details.img} alt="" />
          <h1 className="text-[25px] font-semibold uppercase mt-5 text-[#001b46]">
            {details.title}
          </h1>
          <div className="flex items-center gap-4">
            <p className="font-semibold my-3 flex items-center gap-2">
              <CgProfile className="text-blue-500"></CgProfile>Himu Amin
            </p>
            <p className="font-semibold my-3 flex items-center gap-2">
              <IoCalendar className="text-blue-500"></IoCalendar>
              {details.fullDate}
            </p>
          </div>
          <p className="mb-5 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            laborum ipsum beatae aliquam perspiciatis est id, odit deleniti
            neque? Tempore eveniet quae totam porro consequuntur, asperiores
            iusto repudiandae repellat. Adipisci earum ducimus enim? Laudantium
            nihil officiis non. Nisi molestias dicta nobis ad deleniti non
            nesciunt aliquid dignissimos saepe? Recusandae sed voluptatum minus
            nulla quisquam modi porro fugiat, officia magnam quod impedit,
            sapiente numquam architecto earum, fugit itaque. Vitae tempora quo
            vel necessitatibus ullam repellat dolores adipisci optio animi,
            delectus quaerat dolorum aliquid. Rerum minima ratione fuga
            officiis, est assumenda, quas eum quam perspiciatis possimus sequi
            maiores a obcaecati consectetur facere.
          </p>
          <p className="mb-5 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            laborum ipsum beatae aliquam perspiciatis est id, odit deleniti
            neque? Tempore eveniet quae totam porro consequuntur, asperiores
            iusto repudiandae repellat. Adipisci earum ducimus enim? Laudantium
            nihil officiis non. Nisi molestias dicta nobis ad deleniti non
            nesciunt aliquid dignissimos saepe? Recusandae sed voluptatum minus
            nulla quisquam modi porro fugiat, officia magnam quod impedit,
            sapiente numquam architecto earum, fugit itaque. Vitae tempora quo
            vel necessitatibus ullam repellat dolores adipisci optio animi,
            delectus quaerat dolorum aliquid. Rerum minima ratione fuga
            officiis, est assumenda, quas eum quam perspiciatis possimus sequi
            maiores a obcaecati consectetur facere.
          </p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1 font-medium">
              <IoShareSocial className="text-blue-500 text-lg" />
              Share :
            </p>
            <Link
              target="_blank"
              className="p-2 rounded-lg bg-gray-200 hover:bg-blue-500 hover:text-white duration-300"
              to={`https://www.facebook.com/sharer/sharer.php?u=https://himuamin.com/blogs/${details.id}`}
            >
              <FaFacebookF />
            </Link>
            <Link
              target="_blank"
              className="p-2 rounded-lg bg-gray-200 hover:bg-blue-500 hover:text-white duration-300"
              to={`https://www.linkedin.com/shareArticle?mini=true&url=https://himuamin.com/blogs/${details.id}`}
            >
              <FaLinkedinIn />
            </Link>
            <Link
              target="_blank"
              className="p-2 rounded-lg bg-gray-200 hover:bg-blue-500 hover:text-white duration-300"
              to={`https://twitter.com/share?url=https://https://himuamin.com/blogs/${details.id}`}
            >
              <FaXTwitter />
            </Link>
          </div>
        </div>
        <div className="bg-[#f4f5f8] md:w-1/3 p-8 md:h-[26rem] rounded-lg">
          <h3 className="text-[20px] font-semibold uppercase pb-2 border-b border-b-gray-300 text-[#001b46]">
            Recent Blogs
          </h3>
          {details?.details?.recentblogs.map((recentBlog, idx) => (
            <Link  key={idx} to={`/blogs/${recentBlog.link}`}>
            <div className="mt-5 flex items-center gap-3 group">
              <div className="w-2/3">
                <img className="w-full rounded-md" src={recentBlog.img} alt="" />
              </div>
              <h6 className="w-full text-[14px] group-hover:text-blue-500 duration-300">
                {recentBlog.title}
              </h6>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
