import Container from "components/container";
import Wrapper from "components/wrapper";
import DefaultLayout from "layouts/default";
import CTA from "./cta";
import Stats from "./home/stats";
import Testimonials from "./home/testimonials";
import ServicesOffer from "./services/servicesOffer";

const Services = () => {
  return (
    <DefaultLayout>
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

export default Services;
