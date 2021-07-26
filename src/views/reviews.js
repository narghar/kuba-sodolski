import Container from "components/container";
import Hero from "components/hero";
import Wrapper from "components/wrapper";
import DefaultLayout from "layouts/default";
import Blog from "views/home/blog";
import CTA from "./cta";
import Content from "./reviews/content";
import ReviewTabs from "./reviews/reviewTabs";

const Reviews = () => {
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
          <Content />
          <ReviewTabs />
        </Container>
      </Wrapper>
      <CTA />
      <Wrapper>
        <Container>
          <Blog dotsDisabled="true" />
        </Container>
      </Wrapper>
    </DefaultLayout>
  );
};

const page = {
    bg: 3,
    bgHeight: "h-96 sm:h-[623px]",
    heading:
      "Zaufało mi już ponad 130  klientów. Dołącz do zadowolonego grona i zacznijmy biznes razem",
    hedingMaxWidth: 635,
    headingPadding: "sm:pt-[269px]",
    icons: false,
}

export default Reviews;
