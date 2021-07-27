
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
              url={ref.url}
              active={ref.active}
            />
          ))}
        </div>
        <div className="hidden md:block bg-lighterGray rounded-b-[20px] rounded-tr-[20px] pt-[54px] pr-[51px] pb-[36px] pl-[56px] max-w-[790px] mb-10">
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
    name: "Ewelina Lewczuk",
    position: "Marketing Manager",
    date: "2020-10-23",
    url: "https://www.linkedin.com/in/ewelina-lewczuk/",
    text: [
      "Kilkukrotnie miałam przyjemność pracować z Panem Jakubem przy realizacji istotnych dla nas projektów i każdorazowo tłumaczenia były wykonywane na wysokim poziomie. Ponieważ we współpracy cenię sobie profesjonalizm, odpowiedzialność i zaangażowanie, polecam Państwu jak i sama liczę na kolejne wspólne projekty.",
    ],
    active: true,
  },
  {
    name: "Roman Kawszyn",
    position: "Trener i mentor Handlowców",
    date: "2020-02-18",
    url: "https://www.linkedin.com/in/romankawszyn/",
    text: [
      "Mistrz. Nie tylko słowa. Przede wszystkim emocji. Mieliśmy już wielu tłumaczów. Nikt jednak do tej pory, naprawdę nikt, nie potrafił przekazać prócz treści wartości emocjonalnej. Wtedy kiedy zamierzaliśmy uczestnicy szkolenia czuli żart, wzruszenie, sarkazm. Za każdym razem w punkt. Przez trzy dni tłumaczenia żaden z uczestników ani razu nie poprosił o powtórzenie czegokolwiek, nie upewniał się czy dobrze zrozumiał. No i jeszcze jedno- Kuba jako człowiek. Prawdziwy, normalny, fajny gość. Polecam<br>Gdyby ktoś potrzebował więcej informacji zapraszam do kontaktu 500177174",
    ],
    active: false,
  },
  {
    name: "Katherine Bossert",
    position: "Director of Customer Relations and Human Resources",
    date: "2020-03-02",
    url: "https://www.linkedin.com/in/katherine-bossert-32184a21/",
    text: [
      "I recently attended a sales training event presented by a European Company. During this event Jakub acted as translator. His command of the English language is truly outstanding for a non-native English speaker. His verbal expressions of the subject matter were clear, concise and easy to understand. I was especially impressed when I found out that he had never worked with this particular company before. Although he had no knowledge of the chemical industry he was able to keep the audience engaged.",
    ],
    active: false,
  },
  {
    name: "Dominika Sęk",
    position: "PR Manager and Management Board Assistant",
    date: "2020-11-27",
    url: "https://www.linkedin.com/in/dominikasek/",
    text: [
      "Serdecznie polecam Pana Jakuba, który świadczy usługi tlumaczeniowe na najwyższym poziomie: rzetelnie, profesjonalne a przede wszystkim, jako jeden z nielicznych potrafi się szybko odnaleźć w stresujących sytuacjach. Pan Jakub wykonywał tlumaczenia symultaniczne oraz konsekutywne podczas międzynarodowych targów Hausmesse organizowanych przez firmę Kronospan, gdzie eksperci i goście z całej Europy z branży przemysłu drzewnego, meblowego i budownictwa wymienią się doświadczeniami oraz poznają innowacyjne rozwiązania technologiczne 👍 Dziękuję i polecam!",
    ],
    active: false,
  },

  {
    name: "Adam Szaran",
    position: "Co-founder / Sales Executive / Marketing Director",
    date: "2020-03-03",
    url: "https://www.linkedin.com/in/adamszaran/",
    text: [
      "<p>Zwykło się traktować tłumaczy jak „mięso armatnie”. Założenie jest proste - ktoś ma siedzieć i tłumaczyć. Nie myślimy ile procentowo tego co chcemy przekazać dotrze do odbiorcy.</p><p>Pierwszy raz otworzyłem oczy gdy byłem tłumaczony równocześnie na 4 języki a uczestników szkolenia rozsadziliśmy w grupy narodowe. Dwie się dobrze bawiły i reagowały a dwie po prostu śledziły mniej więcej treść szkolenia. Zobaczyliśmy różnicę w tłumaczach.</p><p>Nie ma sensu robić „sztuki dla sztuki”, zamiast męczyć słuchaczy i przekazywać im pewnie z 60% całej prezentacji, lepiej im dać prospekty w języku ojczystym i niech poczytają sobie w pokoju hotelowym.<br/>Tłumacz ma ogromne znaczenie, ma być przedłużeniem mówcy a nie cenzorem jego przekazu. Nie każdy to zrobi ponieważ poza znajomością języka trzeba znać kulturę, techniki tłumaczeń, przekładać żarty i anegdoty, przygotować się do terminologii.</p><p>Drugie objawienie, którego doznałem było w USA, przy grupie netive-ów w Karolinie Południowej. Pojechaliśmy z Kubą a on staną za nami i w wersji konsekutywnej oddawał „zdanie za zdanie” - z pełną mocą, dokładnością, energią, zabiegami retorycznymi. Wrażenie było takie, że grupa słucha bezpośrednio trenera w czasie rzeczywistym, reaguje tu gdzie trzeba, podąża za nim. Na koniec uczestnicy podchodzili i pytali czy Kuba jest Amerykaninem.<br/>Zobaczyłem co to jest prawdziwe tłumaczenie. Dopóki się tego nie dozna to trudno zrozumieć.</p><ul><li>Nie każdy tłumacz zapewnia przekład przekazu, niektórzy po prostu mniej więcej mówią o czym mówi prezenter zostawiając 60% treści. Kuba zostawia i treść i przekaz emocjonalny co daje pewnie 99% tego co chciał oddać mówca.</li><li>Nie każdy tłumacz jest przygotowany. Kuba jest.</li><li>Nie każdy potrafi przetłumaczyć żarty czy anegdoty tak by rozumieli. Kuba to robi.</li>  <li>Nie każdy się przygotowuje. Kuba owszem.</li><li>Nie każdy jest gotów mówić do native-ów. Kuba mówi.</li><li>Nie każdy jest w stanie wyjść z kabiny i dawać z siebie na środku. Kuba jest.</li><li>Nie każdy nadaje się by go pokazać gośćiom z zagranicy, wychodzić do nich w czasie przerw czy na kolacji, czasem lepiej by tłumacz został w kabinie. Kuba jest dobrym reprezentantem.</li></ul><p>Nie chcę trywializować ale jest to trochę odkrycie na miarę pomidorów malinowych w Biedronce.<br/>Niektórzy mówią „liczy się sztuka na stole” i kupują te bez smaku, zwykłe, zimowe. Ja od kiedy spróbowałem malinowego to jednak wiem, że śniadanie może być też smaczne :)</p><p>Możesz po prostu zapewniać tłumaczenie a możesz zadbać o satysfakcję mówców i uczestnków. Na niepowtarzalność wydarzenia, jego sukces, wspomnienia uczestników - wpływa TŁUMACZ.</p><p>Kuba robi różnicę jak pomidor malinowy. Polecam Go. Bądź jak Kuba.</p>",
    ],
    active: false,
  },
  {
    name: "Agnieszka Mirosz-Małetko",
    position: "Office Manager & Executive Assistant",
    date: "2019-06-04",
    url: "https://www.linkedin.com/in/agnieszka-mirosz-ma%C5%82etko-a5471755/",
    text: [
      "Jakub jest znakomitym tłumaczem konferencyjnym. Mieliśmy okazję współpracować przy okazji eventu, na który zaprosiliśmy Ambasadora Estonii. Panowie bardzo szybko złapali kontakt, dzięki czemu tłumaczenie wypadło bardzo naturalnie, a zarazem profesjonalnie. Zdecydowanie polecam współpracę z Jakubem!",
    ],
    active: false,
  },
  {
    name: "Dominika Jędrzejewska-Imach",
    position: "Marketing & PR Manager",
    date: "2019-06-17",
    url: "https://www.linkedin.com/in/dominika-j%C4%99drzejewska-imach-b5ba85147/",
    text: [
      "Polecam współpracę z Jakubem Sodolskim - jest profesjonalistą w każdym calu, a także przemiłą i otwartą na współpracę osobą. Jestem bardzo zadowolona z tłumaczenia symultanicznego ( język włoski), które wykonał na potrzeby Pytania na Śniadanie.",
    ],
    active: false,
  },
  {
    name: "John Baird",
    position: "Account Manager",
    date: "2020-02-21",
    url: "https://www.linkedin.com/in/john-baird-86a7067/",
    text: [
      "I recently attended a sales training seminar, Effective Sales Techniques, which was conducted by al fianco, Roman Kawszyn/ Adam Szaran in Greenville SC, USA, and Jakub was tasked not only with the responsibility of translating a fast-moving presentation conducted in Polish to an English-speaking audience, but to deliver the translation articulately and with the same energy and inflection as the presenters. This was, obviously, no small task but he did so very capably and professionally. I would definitely recommend Jakub for future translation needs and responsibilities for this type of role",
    ],
    active: false,
  },
  {
    name: "Agnieszka Zaranek",
    position: "Project manager",
    date: "2020-12-15",
    url: "Phttps://www.linkedin.com/in/agnieszka-zaranek-70885490/",
    text: [
      "<p>Z wielką przyjemnością polecam usługi tłumaczeniowe w wykonaniu p. Jakuba Sodolskiego każdej firmie, której zależy na najwyższej klasy tłumaczeniu i kompleksowej obsłudze wydarzeń.</p><p>Miałam okazję współpracować z p. Jakubem Sodolskim jako organizatorka uroczystej konferencji z okazji zawieszenia wiechy na powstającej hali przemysłowej. Wydarzenie miało charakter międzynarodowy z racji kraju pochodzenia inwestora, w związku z czym niezbędna była obsługa językowa w postaci tłumaczenia konferencyjnego symultanicznego z języka polskiego na angielski oraz z języka angielskiego na polski.</p><p>Obsługę tłumaczeniową powierzyłam zespołowi p. Jakuba. Z dużą satysfakcją stwierdzam, że wywiązał się z tego zadania na najwyższym poziomie. Pan Jakub wykonał tłumaczenie symultaniczne szeregu wystąpień przedstawicieli firmy deweloperskiej, firmy zamawiającej inwestycję oraz przedstawicieli władz samorządowych.       Zrealizowane tłumaczenie było dynamiczne i przyjemne w odbiorze, w        pełni dopasowane tonem i doborem słownictwa do charakteru           wydarzenia oraz wykonane na wysokim poziomie precyzji. Tłumacze           wykazali się również dokładnym przygotowaniem terminologicznym i         znajomością branży, której dotyczyło tłumaczenie.</p><p>Jestem przekonana, że dzięki tłumaczeniu goście wydarzenia zrozumieli 100% treści przemówień w obu językach, dzięki czemu byli w pełni zadowoleni z uczestnictwa w evencie. Z pewnością skorzystam w przyszłości z usług p. Jakuba Sodolskiego i mogę z pełnym przekonaniem polecić go jako pewną firmę i godnego zaufania tłumacza. </p>",
    ],
    active: false,
  },
  {
    name: "Lukasz Wilczynski",
    position: "Space Evangelist, PR & Communication advisor",
    date: "2020-11-18",
    url: "https://www.linkedin.com/in/lukaszwilczynski/",
    text: [
      "Współpracowałem z Jakubem podczas European Rover Challenge Space and Robotics Event 2020. Jakub znakomicie zrealizował zadanie przetłumaczenia symultanicznego trzech dni prelekcji, wywiadów i debat z zakresu astronautyki i robotyki. Tłumaczenie było na najwyższym poziomie dzięki dokładnemu przygotowaniu merytorycznemu tłumacza. Dzięki tłumaczeniu nasi słuchacze z zagranicy mogli z powodzeniem śledzić kolejne części programu przez internet, a widzowie w Polsce bez trudu rozumieli wystąpienia obcokrajowców. Z przyjemnością polecam Jakuba jako sprawdzonego i rzetelnego specjalistę od tłumaczeń.",
    ],
    active: false,
  },
];



export default ReviewTabs
