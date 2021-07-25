import Container from "components/container";
import Wrapper from "components/wrapper";
import DefaultLayout from "layouts/default";
import CTA from "views/cta";
import Blog from "views/home/blog";
import AboutCards from "./about-me/about-cards";
import MainAbout from "./about-me/main-about";
import Stats from "./home/stats";

const AboutMe = () => {
  return (
    <DefaultLayout>
      <Container>
        <MainAbout />
      </Container>
      <Stats />
      <Container>
        <AboutCards />
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

export default AboutMe;
