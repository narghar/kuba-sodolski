import Container from "components/container";
import Wrapper from "components/wrapper";
import DefaultLayout from "layouts/default";
import Blog from "views/home/blog";
import CTA from "./cta";
import Content from "./reviews/content";
import ReviewTabs from "./reviews/reviewTabs";

const Reviews = () => {
  return (
    <DefaultLayout>
      <Container>
        <Content />
        <ReviewTabs />
      </Container>
      <CTA />
      <Wrapper>
        <Container>
          <Blog dotsDisabled="true" />
        </Container>
      </Wrapper>
    </DefaultLayout>
  );
};

export default Reviews;
