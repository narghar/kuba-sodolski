import ServiceCard from "components/serviceCard";

const ServicesOffer= () => {
  return (
    <section className="pt-16 pb-28">
      <p className="text-primary text-3xl leading-[3rem] font-medium mb-14">
        Skorzystaj z doświadczenia tłumacza, który uczestniczył w setkach
        konferencji. Zamów obsługę u źródła - bez kosztów pośredników. Zyskaj:
        czas, pieniądze, bezpośrednią komunikację i płynną organizację.{" "}
      </p>
      <h2 className="text-primary">Co ofertuję?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-20">
        {services.map((el, i) => (
          <ServiceCard key={i} item={el.item} title={el.title} text={el.text} />
        ))}
      </div>
    </section>
  );
};

const services = [
  {
    item: "01",
    title: [<>Tłumaczenie<br/>zdalne</>],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus enim nunc, vestibulum nec malesuada in, hendrerit a felis. ",
  },
  {
    item: "02",
    title: [<>Tłumaczenie<br/>symultaniczne</>],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus enim nunc, vestibulum nec malesuada in, hendrerit a felis. ",
  },
  {
    item: "03",
    title: [<>Tłumaczenie<br/>konsekutywne</>],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus enim nunc, vestibulum nec malesuada in, hendrerit a felis. ",
  },
  {
    item: "04",
    title: [<>Tłumaczenie<br/>towarzyszące</>],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus enim nunc, vestibulum nec malesuada in, hendrerit a felis. ",
  },
  {
    item: "05",
    title: [<>Sprzęt tłumaczeniowy<br/> i nagłośnieniowy</>],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus enim nunc, vestibulum nec malesuada in, hendrerit a felis. ",
  },
  {
    item: "06",
    title: [<>Wiele języków</>],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus enim nunc, vestibulum nec malesuada in, hendrerit a felis. ",
  },
];

export default ServicesOffer;
