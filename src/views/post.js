import Container from 'components/container';
import DefaultLayout from 'layouts/default';
import Image from "next/image";
import parseHtml from "utils/parseHtml";
import Blog from './home/blog';
import RelatedPost from 'components/relatedPost';


const Post = ({ post }) => {
  return (
    <DefaultLayout>
      <Container>
        <article className="max-w-[878px] mx-auto pt-20 -mb-20">
          <Image src={post.featuredImage?.node.sourceUrl} alt="image" />
          <p className="text-base font-normal text-primary mt-10">
            {post.category}
            <span className="inline-block mx-9">|</span>
            {post.time}
          </p>
          <h2 className="text-3xl text-primary font-medium leading-tight mt-3">
            {post.title}
          </h2>
          {/* <PostDate dateString={post.date} /> */}
          <div className="post-content">{parseHtml(post.content)}</div>
          <footer className="pt-9">
            <h3 className="text-primary text-2xl font-bold mb-10">Podobne wpisy</h3>
            {related.map((el, i) => (
              <RelatedPost key={i} title={el.title} category={el.category} time={el.time} href={el.href} />
            ))}
          </footer>
        </article>
        <Blog dotsDisabled="true" />
      </Container>
    </DefaultLayout>
  );
}


const related = [
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    category: "Tłumaczenia ustne",
    time: "6 min",
    href: "/wpis",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    category: "Tłumaczenia ustne",
    time: "6 min",
    href: "/wpis",
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    category: "Tłumaczenia ustne",
    time: "6 min",
    href: "/wpis",
  },
];

export default Post;
