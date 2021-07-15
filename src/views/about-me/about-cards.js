import AboutCard from "components/aboutCard";

const AboutCards = () => {
  return (
    <section className="pt-16 sm:pt-44 pb-16 sm:pb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-10 md:gap-y-20">
      {cards.map((card, i) => (
        <AboutCard key={i} item={card.item} title={card.title} text={card.text} />
      ))}
    </section>
  )
}



const cards = [
  {
    item: "01.",
    title: "Ekspert od tłumaczeń ustnych",
    text: "Tłumaczenie ustne to zupełnie inne zajęcie niż tłumaczenie pisemne i wymaga odrębnego zestawu umiejętności, takich jak praca głosem, specjalistyczna notacja, techniki tłumaczenia na bieżąco, ekstremalna koncentracja i zarządzanie skrajnym stresem.",
  },
  {
    item: "02.",
    title: "Zawsze opanowany",
    text: "Moi klienci podkreślają, że potrafię zachować zimną krew nawet w najmniej spodziewanych sytuacjach, które wpisane są w wydarzenia na żywo.",
  },
  {
    item: "03.",
    title: "Bardzo długie teksty",
    text: "Nie każdy tłumacz potrafi zanotować, zapamiętać i odtworzyć bardzo długie teksty. Ze mną jesteś bezpieczny - nawet kiedy prelegent zapomni o tłumaczeniu.",
  },
  {
    item: "04.",
    title: "Wygląd jest ważny",
    text: "Cechuje mnie takt i profesjonalny wygląd, adekwatny do kontekstu spotkania. Bywają spotkania, kiedy nie jesteśmy widoczni, ale są i takie gdzie tłumacz jest widoczną częścią zespołu. Ważne, żeby godnie reprezentował swojego klienta.",
  },
  {
    item: "05.",
    title: "Finanse i ekonomia",
    text: "Większość tłumaczy to humaniści i wielu gubi się w danych liczbowych. Ja mam do nich perfekcyjną pamięć oraz znam się na biznesie, finansach i ekonomii.",
  },
  {
    item: "06.",
    title: "Dbałość o szczegóły",
    text: "Dopinam na ostatni guzik, zapewniam nowoczesny sprzęt, indywidualnie podchodzę do Twojego wydarzenia, współpracuję z niezawodnymi tłumaczami i technikami.`",
  },
];


export default AboutCards
