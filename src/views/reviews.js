import Container from "components/container";
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
      <Container>
        <Blog dotsDisabled="true" />
      </Container>
    </DefaultLayout>
  );
};

export default Reviews;
