import bg01 from "assets/header/01-bg.png";
import bg02 from "assets/header/02-bg.png";
import bg03 from "assets/header/03-bg.png";
import bg04 from "assets/header/04-bg.png";
import bg05 from "assets/header/05-bg.png";
import Container from "components/container";
import HeaderIcons from "components/headerIcons";
import HomeHeader from "layouts/default/homeHeader";
import Image from "next/image";
import { useRouter } from "next/router";
import Menu from "./menu";



const LayoutDefaultHeader = () => {
  const router = useRouter();
  if (router.pathname === "/") {
    return (
      <header className="bg-primary w-full relative">
        <Container>
          <HomeHeader />
        </Container>
      </header>
    );
  }
    return (
      <header className="relative">
        {pages.map((page, i) =>
          router.pathname === page.path ? (
            <div key={i} className={page.bgHeight}>
              <Image
                src={page.bg}
                placeholder="blur"
                objectFit="cover"
                layout="fill"
              />
              <Container>
                <Menu />
                <div className={router.pathname === "/wpis" ? "relative mt-8 sm:mt-[94px]" : "relative mt-8 sm:mt-[161px]"}>
                  <div className="flex flex-wrap  w-full justify-between items-center absolute">
                    <h1
                      key={i}
                      className="text-white font-bold text-center sm:text-left text-3xl sm:text-4xl leading-tight; "
                      style={{ maxWidth: page.hedingMaxWidth + "px" }}
                    >
                      {page.heading}
                    </h1>
                    {page.icons ? <HeaderIcons /> : ""}
                  </div>
                </div>
              </Container>
            </div>
          ) : (
            ""
          )
        )}
      </header>
    );
};

const pages = [
  {
    path: "/o-mnie",
    bg: bg01,
    bgHeight: "h-96 sm:h-[622px]",
    heading:
      "Od 2010 roku z laserową precyzją przekazuje drugiej stronie dokładnie  to, co chcesz powiedzieć",
    hedingMaxWidth: 630,
    icons: false,
  },
  {
    path: "/opinie",
    bg: bg04,
    bgHeight: "h-96 sm:h-[623px]",
    heading:
      "Zaufało mi już ponad 130  klientów. Dołącz do zadowolonego grona i zacznijmy biznes razem",
    hedingMaxWidth: 635,
    icons: false,
  },
  {
    path: "/uslugi",
    bg: bg05,
    bgHeight: "h-96 sm:h-[623px]",
    heading:
      "Służę Ci pomocą przy budowaniu Twojego wydarzenia. Sprawdź moje usługi",
    hedingMaxWidth: 635,
    icons: false,
  },
  {
    path: "/faq",
    bg: bg03,
    bgHeight: "h-96 sm:h-[623px]",
    heading: [
      <>
        Masz wątpliwości? Przejrzyj najczęściej zadawane pytania. <br /> A po
        więcej skontaktuj się ze mną.
      </>,
    ],
    hedingMaxWidth: 582,
    icons: false,
  },
  {
    path: "/blog",
    bg: bg01,
    bgHeight: "h-96 sm:h-[622px]",
    heading:
      "Dowiedz się wiecej o nowościach w mojej branży. Jak pracuje i co robię w szczegółach",
    hedingMaxWidth: 635,
    icons: false,
  },
  {
    path: "/kontakt",
    bg: bg01,
    bgHeight: "h-96 sm:h-[622px]",
    heading:
      "Dowiedz się wiecej o nowościach w mojej branży. Jak pracuje i co robię w szczegółach",
    hedingMaxWidth: 635,
    icons: false,
  },
  {
    path: "/wpis",
    bg: bg02,
    bgHeight: "h-96 sm:h-[520px]",
    heading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum tortor eu lorem commodo, sed lacinia est accumsan",
    hedingMaxWidth: 640,
    icons: true,
  },
];

export default LayoutDefaultHeader;
