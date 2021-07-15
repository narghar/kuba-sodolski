import Container from "components/container";
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
      <Container>
        <Blog dotsDisabled="true" />
      </Container>
    </DefaultLayout>
  );
};

export default Faq;