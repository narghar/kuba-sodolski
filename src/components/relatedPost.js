import Link from "next/link";
const RelatedPost = ({ title, category, time, href }) => {
  return (
    <div className=" text-primary max-w-[420px] mb-10">
      <div className="flex items-center">
        <i className="las la-file-alt text-lg mr-5"></i>
        <Link href={href}>
          <a>
            <h4 className="text-lg font-bold leading-5">{title} ...</h4>
          </a>
        </Link>
      </div>
      <p className=" col-start-2 text-base font-normal mt-2 ml-[38px]">
        {category}
        <span className="inline-block mx-9">|</span>
        {time}
      </p>
    </div>
  );
};

export default RelatedPost;
