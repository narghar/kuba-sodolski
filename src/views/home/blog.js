import ArrowLeft from "assets/home/01.svg";
import ArrowRight from "assets/home/02.svg";
import image1 from "assets/home/blog/01.png";
import image2 from "assets/home/blog/02.png";
import image3 from "assets/home/blog/03.png";
import dots from "assets/home/dots.png";
import BlogPost from "components/blogPost";
import Image from "next/image";


const Blog = ({dotsDisabled}) => {
  return (
    <section className="pt-40 pb-28 relative">
      <div className="hidden sm:flex gap-x-[59px]">
        {posts.map((post, i) => (
          <BlogPost
            key={i}
            img={post.img}
            category={post.category}
            time={post.time}
            summary={post.summary}
          />
        ))}
      </div>
      <div className="visible sm:hidden">
        <BlogPost
          img={posts[0].img}
          category={posts[0].category}
          time={posts[0].time}
          summary={posts[0].summary}
        />
      </div>
      <div className="flex justify-center md:justify-start mt-14 gap-x-3">
        <ArrowLeft />
        <ArrowRight />
      </div>
      <div
        className={
          dotsDisabled
            ? "hidden"
            : "absolute z-0 pt-6 top-[35px] -left-1/3 transform"
        }
      >
        <Image src={dots} placeholder="blur" />
      </div>
    </section>
  );
};

const posts = [
  {
    img: image1,
    category: "Tłumaczenia ustne",
    time: "6 min",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris ligula, rutrum quis placerat et, semper a enim. ",
  },
  {
    img: image2,
    category: "Tłumaczenia ustne",
    time: "6 min",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: image3,
    category: "Tłumaczenia zdalne",
    time: "6 min",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris ligula, rutrum quis placerat.",
  },
];

export default Blog;
