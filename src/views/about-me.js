import Container from "components/container";
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
      <Container>
        <Blog dotsDisabled="true" />
      </Container>
    </DefaultLayout>
  );
};

export default AboutMe;
