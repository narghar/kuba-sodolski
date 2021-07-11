import Container from "components/container";
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
      <Container>
        <Testimonials />
      </Container>
      <Stats />
    </DefaultLayout>
  );
};

export default Services;
