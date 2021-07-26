import ServiceCard from "components/serviceCard";

const ServicesOffer= () => {
  return (
    <section className="py-16 sm:pb-28">
      <p className="text-primary text-xl sm:text-3xl leading-[3rem] font-medium mb-14">
        Skorzystaj z doświadczenia tłumacza, który uczestniczył w setkach
        konferencji. Zamów obsługę u źródła - bez kosztów pośredników. Zyskaj:
        czas, pieniądze, bezpośrednią komunikację i płynną organizację.{" "}
      </p>
      <h2 className="text-primary">Co ofertuję?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 md:gap-y-20">
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
    title: [
      <>
        Tłumaczenie
        <br />
        zdalne
      </>,
    ],
    text: "Pełne bezpieczeństwo epidemiologiczne i optymalizacja kosztów dzięki tłumaczeniu zdalnemu, wybierz z gamy rozwiązań dla tłumaczeń online, skuteczne tłumaczenie spotkań na Zoom, MS Teams i innych platformach, możliwość zastosowania dla tłumaczenia symultanicznego i konsekutywego",
  },
  {
    item: "02",
    title: [
      <>
        Tłumaczenie
        <br />
        symultaniczne
      </>,
    ],
    text: "Tłumaczenie w czasie rzeczywistym, największa kompletność i precyzja, możliwość prowadzenia dyskusji bez przerw na tłumaczenie, oszczędność czasu, tłumacz jest niewidoczny",
  },
  {
    item: "03",
    title: [
      <>
        Tłumaczenie
        <br />
        konsekutywne
      </>,
    ],
    text: "Idealne do krótkich tłumaczeń na uroczystych wydarzeniach i konferencjach prasowych, oszczędność – nie jest konieczny sprzęt konferencyjny, wybierz tłumacza, który potrafi dopasować się do charakteru Twojego wydarzenia, bo będzie widoczny obok prelegenta",
  },
  {
    item: "04",
    title: [
      <>
        Tłumaczenie
        <br />
        towarzyszące
      </>,
    ],
    text: "Negocjacje? audyt? wizyta studyjna? lunch biznesowy? W takich przypadkach najlepiej sprawdzi się tłumaczenie towarzyszące, stanowiące hybrydę konsekutywnego i symultanicznego – tłumacz jest w każdej chwili u boku klienta i zapewnia dynamicznie płynną komunikację niezależnie od sytuacji",
  },
  {
    item: "05",
    title: [
      <>
        Sprzęt tłumaczeniowy
        <br /> i nagłośnieniowy
      </>,
    ],
    text: "Jeśli zamawiasz tłumaczenie wymagające sprzętu konferencyjnego, możesz go zamówić u mnie, by zapewnić sobie wysoką jakość aparatury i uniknąć kosztu pośrednika",
  },
  {
    item: "06",
    title: [<>Wiele języków</>],
    text: "Osobiście tłumaczę angielski, włoski i francuski, a oprócz tego współpracuję ze sprawdzonym gronem profesjonalnych tłumaczy wielu języków, dzięki czemu możesz zlecić obsługę językową dużej konferencji jednemu podmiotowi",
  },
];

export default ServicesOffer;
