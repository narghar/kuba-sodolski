import Container from "components/container";
import Hero from "components/hero";
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
      <Hero
        bg={page.bg}
        bgHeight={page.bgHeight}
        heading={page.heading}
        hedingMaxWidth={page.hedingMaxWidth}
        headingPadding={page.headingPadding}
        icons={page.icons} />
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

const page = {
  bg: 0,
  bgHeight: "h-96 sm:h-[622px]",
  heading:
    "Od 2010 roku z laserową precyzją przekazuje drugiej stronie dokładnie  to, co chcesz powiedzieć",
  hedingMaxWidth: 630,
  headingPadding: "sm:pt-[269px]",
  icons: false,
};

export default AboutMe;
