import Container from "components/container";
import Hero from "components/hero";
import Wrapper from "components/wrapper";
import DefaultLayout from "layouts/default";
import CTA from "./cta";
import Stats from "./home/stats";
import Testimonials from "./home/testimonials";
import ServicesOffer from "./services/servicesOffer";

const Services = () => {
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
        <ServicesOffer />
      </Container>
      <CTA />
      <Wrapper>
        <Container>
          <Testimonials />
        </Container>
      </Wrapper>
      <Stats />
    </DefaultLayout>
  );
};


const page = {
    bg: 4,
    bgHeight: "h-96 sm:h-[623px]",
    heading:
      "Służę Ci pomocą przy budowaniu Twojego wydarzenia. Sprawdź moje usługi",
    hedingMaxWidth: 635,
    headingPadding: "sm:pt-[269px]",
    icons: false,
}

export default Services;
