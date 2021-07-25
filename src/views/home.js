import Container from "components/container";
import MoreReference from "components/moreReference";
import Wrapper from "components/wrapper";
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
      <Wrapper>
        <Container>
          <WhyUs />
        </Container>
      </Wrapper>
      <Stats />
      <Wrapper>
        <Container>
          <Testimonials>
            <MoreReference />
          </Testimonials>
          <Blog />
        </Container>
      </Wrapper>
    </DefaultLayout>
  );
};

export default Home;
