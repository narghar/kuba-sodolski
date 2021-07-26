import Container from 'components/container';
import Hero from 'components/hero';
import RelatedPost from 'components/relatedPost';
import Wrapper from 'components/wrapper';
import DefaultLayout from 'layouts/default';
import Image from "next/image";
import parseHtml from "utils/parseHtml";
import Blog from './home/blog';

const Post = ({ post }) => {
  return (
    <DefaultLayout>
      <Hero
        bg={page.bg}
        bgHeight={page.bgHeight}
        heading={page.heading}
        hedingMaxWidth={page.hedingMaxWidth}
        headingPadding={page.headingPadding}
        icons={page.icons}
      />
      <Wrapper>
        <Container>
          <article className="max-w-[878px] mx-auto pt-16 sm:pt-20 -mb-20">
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
              <h3 className="text-primary text-2xl font-bold mb-10">
                Podobne wpisy
              </h3>
              {related.map((el, i) => (
                <RelatedPost
                  key={i}
                  title={el.title}
                  category={el.category}
                  time={el.time}
                  href={el.href}
                />
              ))}
            </footer>
          </article>
          <Blog dotsDisabled="true" />
        </Container>
      </Wrapper>
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

const page = {
  bg: 1,
  bgHeight: "h-96 sm:h-[520px]",
  heading:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum tortor eu lorem commodo, sed lacinia est accumsan",
  hedingMaxWidth: 640,
  headingPadding: "sm:pt-[202px]",
  icons: true,
};

export default Post;
