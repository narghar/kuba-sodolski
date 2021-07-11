import eu from "assets/home/about/eu.png";
import photo from "assets/home/about/photo.png";
import pstk from "assets/home/about/pst.png";
import Button from "components/button";
import Image from "next/image";
const About = () => {
  return (
    <section className="flex gap-x-14 pt-56 flex-wrap lg:flex-nowrap">
      <div className="flex-shrink-1 2xl:flex-shrink-0 2xl:ml-[-310px]">
        <Image src={photo} placeholder="blur" />
      </div>
      <div className="max-w-[657px]">
        <h2 className="text-primary -mt-7">
          Chcesz, żeby uczestnicy rozumieli 98% treści zamiast standardowych
          60%?
        </h2>
        <p className="text-primary font-light leading-9 text-xl mt-11 mr-3">
          Od ponad 10 lat firmy takie jak Twoja realizują swoje cele we
          współpracy z partnerami zagranicznymi dzięki moim tłumaczeniom ustnym.
          Skorzystaj z ponad 10 lat doświadczenia w roli tłumacza
          konferencyjnego i perfekcyjnego opanowania języka.
        </p>
        <p className="text-primary font-light leading-9 text-xl mt-8 mr-3">
          Z laserową precyzją przekazuję drugiej stronie dokładnie to, co chcesz
          powiedzieć.
        </p>
        <div className="flex items-center mt-14 mb-14">
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
