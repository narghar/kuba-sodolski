import Container from "components/container";
import Wrapper from "components/wrapper";
import DefaultLayout from "layouts/default";
import CTA from "views/cta";
import Blog from "views/home/blog";
import MainFAQ from "./faq/mainFaq";

const Faq = () => {
  return (
    <DefaultLayout>
      <Container>
        <MainFAQ />
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

export default Faq;
