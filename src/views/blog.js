import Container from "components/container";
import Hero from "components/hero";
import DefaultLayout from "layouts/default";
import Posts from "./blog/posts";

const Blog = () => {
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
      <Container>
        <Posts />
      </Container>
    </DefaultLayout>
  );
};


const page = {
  path: "/blog",
  bg: 0,
  bgHeight: "h-96 sm:h-[622px]",
  heading:
    "Dowiedz się wiecej o nowościach w mojej branży. Jak pracuje i co robię w szczegółach",
  hedingMaxWidth: 635,
  headingPadding: "sm:pt-[269px]",
  icons: false,
};

export default Blog;
