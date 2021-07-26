import Container from "components/container";
import Hero from "components/hero";
import Wrapper from "components/wrapper";
import DefaultLayout from "layouts/default";
import CTA from "views/cta";
import Blog from "views/home/blog";
import MainFAQ from "./faq/mainFaq";

const Faq = () => {
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

const page = {
    bg: 2,
    bgHeight: "h-96 sm:h-[623px]",
    heading: [
      <>
        Masz wątpliwości? Przejrzyj najczęściej zadawane pytania. <br /> A po
        więcej skontaktuj się ze mną.
      </>,
    ],
    hedingMaxWidth: 582,
    headingPadding: "sm:pt-[269px]",
    icons: false,
  }

export default Faq;
