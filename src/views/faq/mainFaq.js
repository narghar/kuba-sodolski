import FAQItem from "components/faqItem";

const MainFAQ = () => {
  return (
    <section className="my-16">
      {questionList.map((el, i) =>
        <FAQItem
          key={i}
          question={el.question}
          answer={el.answer}
          active={el.active}
        />
      )}
    </section>
  )
}

const questionList = [
  {
    question: "Ile kosztuje tłumaczenie?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis magna eros. Aliquam erat volutpat. Fusce volutpat nisi non pulvinar ornare. Donec efficitur mauris non tortor consectetur, non lacinia diam imperdiet.",
    active: true,
  },
  {
    question: "Dlaczego tłumacz rozlicza się w dniach?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis magna eros. Aliquam erat volutpat. Fusce volutpat nisi non pulvinar ornare. Donec efficitur mauris non tortor consectetur, non lacinia diam imperdiet.",
    active: false,
  },
  {
    question: "Dlaczego tłumacz prosi o przesałnie prezentacji? ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis magna eros. Aliquam erat volutpat. Fusce volutpat nisi non pulvinar ornare. Donec efficitur mauris non tortor consectetur, non lacinia diam imperdiet.",
    active: false,
  },
  {
    question: "Jaki rodzaj tłumaczenie bedzie dla mnie najlepszy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis magna eros. Aliquam erat volutpat. Fusce volutpat nisi non pulvinar ornare. Donec efficitur mauris non tortor consectetur, non lacinia diam imperdiet.",
    active: false,
  },
  {
    question: "Czy muszę osobno zamówić sprzęt?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis magna eros. Aliquam erat volutpat. Fusce volutpat nisi non pulvinar ornare. Donec efficitur mauris non tortor consectetur, non lacinia diam imperdiet.",
    active: false,
  },
  {
    question: "Dlaczego tłumacze pracują w zespole dwuosobowym",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis magna eros. Aliquam erat volutpat. Fusce volutpat nisi non pulvinar ornare. Donec efficitur mauris non tortor consectetur, non lacinia diam imperdiet.",
    active: false,
  },
];



export default MainFAQ
