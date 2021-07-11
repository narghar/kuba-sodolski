import Tab from "components/tab";

const ReviewTabs = () => {
  return (
    <section>
      <h2 className="text-primary max-w-[770px] mb-[74px]">
        Nie jest sztuką tłumaczyć słowa. Sztuką jest odać ich sens i emocje
      </h2>
      <div className="flex items-start">
        <div>
          {references.map((ref, i) => (
            <Tab
            key={i}
            name={ref.name}
            position={ref.position}
            active={ref.active}
            />
          ))}
        </div>
        <div className="bg-lighterGray rounded-b-[20px] rounded-tr-[20px] pt-[54px] pr-[51px] pb-[36px] pl-[56px] max-w-[790px] mb-10">
          <div>
            <h3 className="font-bold text-primary text-2xl">
              Agnieszka Zaranek
            </h3>
            <time
              dateTime="2020-12-15"
              className="text-primary text-lg font-medium"
            >
              15 grudnia 2020
            </time>
            <a
              href="https://www.linkedin.com/in/agnieszka-zaranek-70885490/"
              target="_blank"
              className="text-secondary text-lg font-medium block"
            >
              https://www.linkedin.com/in/agnieszka-zaranek-70885490/
            </a>
          </div>
          <div className="text-lg font-normal text-primary mt-8 leading-[30px]">
            <p className="mb-7">
              Z wielką przyjemnością polecam usługi tłumaczeniowe w wykonaniu p.
              Jakuba Sodolskiego każdej firmie, której zależy na najwyższej
              klasy tłumaczeniu i kompleksowej obsłudze wydarzeń.
            </p>
            <p className="mb-7">
              Miałam okazję współpracować z p. Jakubem Sodolskim jako
              organizatorka uroczystej konferencji z okazji zawieszenia wiechy
              na powstającej hali przemysłowej. Wydarzenie miało charakter
              międzynarodowy z racji kraju pochodzenia inwestora, w związku z
              czym niezbędna była obsługa językowa w postaci tłumaczenia
              konferencyjnego symultanicznego z języka polskiego na angielski
              oraz z języka angielskiego na polski.
            </p>
            <p className="mb-7">
              Obsługę tłumaczeniową powierzyłam zespołowi p. Jakuba. Z dużą
              satysfakcją stwierdzam, że wywiązał się z tego zadania na
              najwyższym poziomie. Pan Jakub wykonał tłumaczenie symultaniczne
              szeregu wystąpień przedstawicieli firmy deweloperskiej, firmy
              zamawiającej inwestycję oraz przedstawicieli władz samorządowych.
              Zrealizowane tłumaczenie było dynamiczne i przyjemne w odbiorze, w
              pełni dopasowane tonem i doborem słownictwa do charakteru
              wydarzenia oraz wykonane na wysokim poziomie precyzji. Tłumacze
              wykazali się również dokładnym przygotowaniem terminologicznym i
              znajomością branży, której dotyczyło tłumaczenie.
            </p>
            <p className="mb-7">
              Jestem przekonana, że dzięki tłumaczeniu goście wydarzenia
              zrozumieli 100% treści przemówień w obu językach, dzięki czemu
              byli w pełni zadowoleni z uczestnictwa w evencie. Z pewnością
              skorzystam w przyszłości z usług p. Jakuba Sodolskiego i mogę z
              pełnym przekonaniem polecić go jako pewną firmę i godnego zaufania
              tłumacza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}




const references = [
  {
    name: "Agnieszka Zaranek",
    position: "Project manager",
    date: "2020-12-15",
    url: "Phttps://www.linkedin.com/in/agnieszka-zaranek-70885490/",
    text: [],
    active: true,
  },
  {
    name: "Barbara Drzazga",
    position: "",
    date: "",
    url: "",
    text: [],
    active: false,
  },
  {
    name: "Ignacy Krasicki",
    position: "Bajkopisarz",
    date: "",
    url: "",
    text: [],
    active: false,
  },
  {
    name: "Agnieszka Niespodziewajka",
    position: "Poseł na Sejm Rzeczpospolitej Polskiej",
    date: "",
    url: "",
    text: [],
    active: false,
  },
  {
    name: "Bartosz Walaszek",
    position: "Filmowiec i muzyk choć kiepski",
    date: "",
    url: "",
    text: [],
    active: false,
  },

  {
    name: "Andrzej Wardęga",
    position: "Bizmesmen",
    date: "",
    url: "",
    text: [],
    active: false,
  },
  {
    name: "Sabina Wszechpolska",
    position: "Copywriter",
    date: "",
    url: "",
    text: [],
    active: false,
  },
  {
    name: "Ilona Brzozowska",
    position: "Kolorystka z Warszawy",
    date: "",
    url: "",
    text: [],
    active: false,
  },
  {
    name: "Marcin Najman",
    position: "Zawodowy karateka",
    date: "",
    url: "",
    text: [],
    active: false,
  },
];

// var date = new Date(Date.UTC(2020, 12, 15));
// var options = { year: 'numeric', month: 'long', day: 'numeric' };
// var dateStr = new Intl.DateTimeFormat('pl-PL', options).format(date);


export default ReviewTabs
