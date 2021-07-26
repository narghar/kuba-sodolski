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
    question: "Co to jest tłumaczenie symultaniczne?",
    answer:
      "Symultaniczne = równoczesne. Tłumacz jednocześnie słucha wypowiedzi, w czasie rzeczywistym przekłada w głowie na drugi język i mówi w tym języku. Niesamowite, prawda? Do tłumaczenia symultanicznego zwykle stosuje się wygłuszające kabiny tłumaczeniowe i specjalną aparaturę konferencyjną. Na kameralnych spotkaniach można tłumaczyć symultanicznie do ucha odbiorcy, siedząc obok niego. Taki rodzaj tłumaczenia symultanicznego to tłumaczenie szeptane.",
    active: true,
  },
  {
    question: "Co to jest tłumaczenie konsekutywne?",
    answer:
      "Prelegent mówi, a tłumacz robi w tym czasie notatki w specjalnym systemie notacji. Kiedy mówca skończy – tłumacz ustny odtwarza wystąpienie w drugim języku. Najlepsi tłumacze potrafią w ten sposób precyzyjnie przełożyć nawet bardzo długie wypowiedzi, trwające 6 minut i więcej!",
    active: false,
  },
  {
    question: "Czy mogę zamówić tłumaczenie zdalne?",
    answer:
      "Tak, praktycznie każdy typ tłumaczenia możemy wykonać zdalnie! Wachlarz możliwości jest bardzo szeroki: od dedykowanych narzędzi, przez proste dodatki do popularnych komunikatorów, aż po najprostsze rozwiązania oparte na zwykłym telefonie. Dzięki tym rozwiązaniom możesz cieszyć się płynną komunikacją i profesjonalnym tłumaczeniem również na spotkaniu online.",
    active: false,
  },
  {
    question: "Jakiego rodzaju tłumaczenia potrzebuję?",
    answer:
      "Oprócz tłumaczeń symultanicznych i konsekutywnych, istnieje cała gama ich odmian. Doświadczony tłumacz doradzi Ci rozwiązanie, które najlepiej sprawdzi się na wydarzeniu, które planujesz. Dlatego zadzwoń, aby rozwiać wszelkie wątpliwości!",
    active: false,
  },
  {
    question: "Czy muszę osobno zamówić sprzęt?",
    answer:
      "Zależy, jaki wariant tłumaczenia będzie realizowany. Przy tłumaczeniu symultanicznym w większości przypadków potrzebny jest sprzęt. Możesz go zamówić u mnie razem z tłumaczeniem – zwykle uzyskasz tym sposobem najlepszy stosunek jakości sprzętu do ceny jego wynajęcia.",
    active: false,
  },
  {
    question: "Dlaczego tłumacze proszą o wysłanie prezentacji?",
    answer:
      "Dopytywanie o prezentacje i materiały bardzo dobrze świadczy o tłumaczu! Pamiętaj, że jako tłumacze jesteśmy na Twoim wydarzeniu ludźmi spoza Twojej organizacji. Nawet kiedy mamy szerokie doświadczenie w danej branży, potrzebujemy przygotować się do konkretnego spotkania. Prosimy o wszelkie dostępne materiały, ponieważ chcemy dać Ci najlepsze możliwe tłumaczenie!",
    active: false,
  },
  {
    question: "Dlaczego potrzeba dwojga tłumaczy?",
    answer:
      "Jednocześnie słuchamy, mówimy (albo notujemy i zapamiętujemy) oraz przetwarzamy wypowiedź klienta w głowie. To proces, który wymaga ekstremalnej koncentracji i nie sposób tłumaczyć bez przerwy. Dlatego tłumacze zmieniają się co 15-30 minut. W przerwie od tłumaczenia pracujemy nad terminologią i wspieramy tłumaczącego kolegę.",
    active: false,
  },
  {
    question: "Dlaczego tłumacze rozliczają się w dniówkach?",
    answer:
      "Zwykle tłumacz nie może przyjąć więcej niż jedno zlecenie danego dnia. Ponadto przygotowanie merytoryczne i leksykalne do tłumaczenia często trwa dłużej niż samo tłumaczenie. W cenie tłumaczenia zawarty jest nie tylko czas samego spotkania, ale też czas niezbędnych przygotowań.",
    active: false,
  },
];



export default MainFAQ
