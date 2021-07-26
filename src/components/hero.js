import bg01 from "assets/header/01-bg.png";
import bg02 from "assets/header/02-bg.png";
import bg03 from "assets/header/03-bg.png";
import bg04 from "assets/header/04-bg.png";
import bg05 from "assets/header/05-bg.png";
import Container from "components/container";
import HeaderIcons from "components/headerIcons";
import Image from "next/image";

const Hero = ({ bg, bgHeight, heading, hedingMaxWidth, headingPadding, icons }) => {
  return (
    <section className="-mt-32 sm:-mt-28">
          <div className={`${bgHeight} relative`}>
            <Image
              src={backgrounds[bg]}
              placeholder="blur"
              objectFit="cover"
              layout="fill"
            />
            <Container>
              <div
                className={`relative pt-40 ${headingPadding}`}
              >
                <div className="flex flex-wrap  w-full justify-between items-center absolute">
                  <h1
                    className="text-white font-bold text-center sm:text-left text-3xl sm:text-4xl leading-tight; "
                    style={{ maxWidth: hedingMaxWidth + "px" }}
                  >
                    {heading}
                  </h1>
                  {icons ? <HeaderIcons /> : ""}
                </div>
              </div>
            </Container>
          </div>
    </section>
  );
};

const backgrounds = [bg01, bg02, bg03, bg04, bg05];

export default Hero;
