import image1 from "assets/about-me/01.png";
import emci from "assets/about-me/emci.png";
import uw from 'assets/about-me/uw.png';
import eu from "assets/home/about/eu.png";
import pstk from "assets/home/about/pst.png";
import Image from "next/image";

const MainAbout = () => {
  return (
    <section className="pt-14 sm:pt-24 mb-16 sm:mb-36">
      <h2 className="text-primary mt-2 ">
        Jestem ekspertem od tłumaczenia słowa mówionego. Moje języki to polski,
        angielski, włoski, francuski
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-x-24 mt-12 sm:mt-24">
        <div className="mt-7 mb-12 lg:mb-0">
          <p className="text-primary font-light text-xl sm:text-2xl leading-10">
            Należę do elitarnego grona tłumaczy akredytowanych przy Unii
            Europejskiej. Jako trener akademicki szkoliłem na elitarnych
            studiach European Masters in Conference Interpreting, doskonalących
            umiejętności aktywnych tłumaczy konferencyjnych, oraz na
            Uniwersytecie Warszawskim.
          </p>
          <div className="grid grid-cols-2 gap-10 sm:gap-x-20 sm:gap-y-14 justify-items-center items-center mt-12">
            <Image src={uw} placeholder="blur" />
            <Image src={emci} placeholder="blur" />
            <Image src={pstk} placeholder="blur" />
            <div className="flex items-center justify-end">
              <div className="flex-shrink-0">
                <Image src={eu} />
              </div>
              <p className="font-bold text-[17px] ml-3 leading-5">
                Tłumacz konferencyjny
                <span className="block font-light">akredytowany przy UE</span>
              </p>
            </div>
          </div>
        </div>
        <Image src={image1} placeholer="blur" />
      </div>
    </section>
  );
};

export default MainAbout;
