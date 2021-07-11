import Container from "components/container";
import MoreReference from "components/moreReference";
import DefaultLayout from "layouts/default";
import About from "views/home/about";
import Blog from "views/home/blog";
import Offer from "views/home/offer";
import OrderSteps from "./home/order-steps";
import Stats from "./home/stats";
import Testimonials from "./home/testimonials";
import WhyUs from "./home/why-us";

const Home = () => {
  return (
    <DefaultLayout>
      <Container>
        <About />
        <Offer />
      </Container>
      <OrderSteps />
      <Container>
        <WhyUs />
      </Container>
      <Stats />
      <Container>
        <Testimonials>
          <MoreReference />
        </Testimonials>
        <Blog />
      </Container>
    </DefaultLayout>
  );
};

export default Home;
