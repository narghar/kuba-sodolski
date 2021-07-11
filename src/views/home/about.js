import eu from "assets/home/about/eu.png";
import photo from "assets/home/about/photo.png";
import pstk from "assets/home/about/pst.png";
import Button from "components/button";
import Image from "next/image";
const About = () => {
  return (
    <section className="flex flex-col items-center lg:flex-row lg:items-start gap-x-14 pt-32 sm:pt-56 ">
      <div className="flex-shrink-1 2xl:flex-shrink-0 2xl:ml-[-310px]">
        <Image src={photo} placeholder="blur" />
      </div>
      <div className="text-center lg:text-left lg:max-w-[657px]">
        <h2 className="text-center lg:text-left text-primary mt-6 lg:-mt-7">
          Chcesz, żeby uczestnicy rozumieli 98% treści zamiast standardowych
          60%?
        </h2>
        <p className="text-primary font-light leading-9 text-base sm:text-xl mt-11 sm:mr-3">
          Od ponad 10 lat firmy takie jak Twoja realizują swoje cele we
          współpracy z partnerami zagranicznymi dzięki moim tłumaczeniom ustnym.
          Skorzystaj z ponad 10 lat doświadczenia w roli tłumacza
          konferencyjnego i perfekcyjnego opanowania języka.
        </p>
        <p className="text-primary font-light leading-9 text-lg sm:text-xl mt-8 sm:mr-3">
          Z laserową precyzją przekazuję drugiej stronie dokładnie to, co chcesz
          powiedzieć.
        </p>
        <div className="flex items-center justify-center lg:justify-start mt-14 mb-14">
          <Image src={eu} />
          <p className="font-bold text-[17px] ml-3 mr-12 leading-5">
            Tłumacz konferencyjny
            <span className="block font-light">akredytowany przy UE</span>
          </p>
          <Image src={pstk} placeholder="blur" />
        </div>
        <Button size="normal">Więcej o mnie</Button>
      </div>
    </section>
  );
};
export default About;
