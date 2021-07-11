import image1 from "assets/blog/01.png";
import BlogPost from "components/blogPost";

const Posts = () => {
  return (
    <section className="grid grid-cols-1 w-full text-center justify-center  lg:w-auto lg:text-left lg:grid-cols-2 pt-24 pb-32 gap-x-12 gap-y-20">
      {posts.map((post, i) => (
        <BlogPost
          key={i}
          img={post.img}
          category={post.category}
          time={post.time}
          summary={post.summary}
        />
      ))}
    </section>
  );
}

const posts = [
  {
    img: image1,
    category: "Tłumaczenia ustne",
    time: "6 min",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris ligula, rutrum quis placerat et, semper a enim. ",
  },
  {
    img: image1,
    category: "Tłumaczenia ustne",
    time: "6 min",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris ligula, rutrum quis placerat et, semper a enim. ",
  },
  {
    img: image1,
    category: "Tłumaczenia ustne",
    time: "6 min",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris ligula, rutrum quis placerat et, semper a enim. ",
  },
  {
    img: image1,
    category: "Tłumaczenia ustne",
    time: "6 min",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris ligula, rutrum quis placerat et, semper a enim. ",
  },
  {
    img: image1,
    category: "Tłumaczenia ustne",
    time: "6 min",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris ligula, rutrum quis placerat et, semper a enim. ",
  },
  {
    img: image1,
    category: "Tłumaczenia ustne",
    time: "6 min",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris ligula, rutrum quis placerat et, semper a enim. ",
  },
];

export default Posts
