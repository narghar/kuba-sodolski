
import Image from "next/image";

const BlogPost = ({ img, category, time, summary }) => {
  return (
    <div className="sm:min-w-[502px] ">
      <Image src={img} placeholder="blur" className="z-20" />
      <p className="text-base font-normal  text-primary mt-6">
        {category}
        <span className="inline-block mx-9">|</span>
        {time}
      </p>
      <p className="text-2xl max-w-[600px] mx-auto lg:mx-0 text-primary font-bold mt-4 leading-7">
        {summary}
      </p>
    </div>
  );
};

export default BlogPost;
