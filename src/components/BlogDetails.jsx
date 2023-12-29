import img from "../assets/images/gallery/g-1.jpg";
import img2 from "../assets/images/gallery/g-2.jpg";
import img3 from "../assets/images/gallery/g-3.jpg";
import img4 from "../assets/images/gallery/g-4.jpg";
const BlogDetails = ({ details }) => {
  return (
    <div className="max-width my-20">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-2/3">
          <img src={img} alt="" />
          <h1 className="text-[25px] font-semibold uppercase my-5 text-[#001b46]">
            {details.title}
          </h1>
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
        </div>
        <div className="bg-[#f4f5f8] md:w-1/3 p-8 md:h-[26rem]">
            <h3 className="text-[20px] font-semibold uppercase pb-2 border-b border-b-gray-300 text-[#001b46]">Recent Blogs</h3>
            <div className="mt-5 flex items-center gap-3">
                <div className="w-2/3"><img className="w-full" src={img2} alt="" /></div>
                <h6 className="w-full text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            </div>
            <div className="mt-5 flex items-center gap-3">
                <div className="w-2/3"><img className="w-full" src={img3} alt="" /></div>
                <h6 className="w-full text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            </div>
            <div className="mt-5 flex items-center gap-3">
                <div className="w-2/3"><img className="w-full" src={img4} alt="" /></div>
                <h6 className="w-full text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
