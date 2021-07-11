import Button from "components/button";
import OfferCards from "components/offerCards";
const About = () => {
  return (
    <section className="pt-20 pb-20 md:pt-48 md:pb-44">
      <h2 className="text-primary text-center md:text-left max-w-[964px]">
        Pełna obsługa językowa w jednym miejscu - zamów ją u doświadczonego
        tłumacza
      </h2>
      <h3 className="text-secondary text-center md:text-left font-bold text-3xl mt-5 mb-10 sm:mb-20">
        Tłumaczę angielski, włoski, francuski
      </h3>
      <OfferCards />
      <div className="text-center mt-20">
        <h3 className=" max-w-[748px] mx-auto text-primary text-3xl font-bold mb-8">
          Jestem po to, by pomóc i Tobie w dopięciu na ostatni guzik Twojego
          eventu, spotkania czy konferencji
        </h3>
        <Button size="normal">Zamów tłumaczenie</Button>
      </div>
    </section>
  );
};





export default About;
