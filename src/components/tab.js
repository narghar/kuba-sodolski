import cn from "classnames";
const Tab = ({ name, position, active }) => {
  return (
    <div
      className={cn(
        "flex items-center gap-x-5  py-3.5 flex-1 2xl:w-[510px] min-w-[370px] mb-3 rounded-tl-[20px] rounded-bl-[20px] flex-wrap md:flex-nowrap",
        active && "bg-lighterGray"
      )}
    >
      <div
        className={cn(
          "w-[58px] h-[58px] bg-primary rounded-full",
          active && "ml-7"
        )}
      ></div>
      <p className="text-primary text-lg font-bold mr-2">
        {name}
        <span className="block text-primary text-base font-light">
          {position}
        </span>
      </p>
      <div className={cn(active ? 'block' : 'hidden', "md:hidden bg-lighterGray rounded-b-[20px] rounded-tr-[20px] pt-[54px] pr-[51px] pb-[36px] pl-[56px] max-w-[790px] mb-10")}>
        <div>
          <h3 className="font-bold text-primary text-2xl">Agnieszka Zaranek</h3>
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
            Jakuba Sodolskiego każdej firmie, której zależy na najwyższej klasy
            tłumaczeniu i kompleksowej obsłudze wydarzeń.
          </p>
          <p className="mb-7">
            Miałam okazję współpracować z p. Jakubem Sodolskim jako
            organizatorka uroczystej konferencji z okazji zawieszenia wiechy na
            powstającej hali przemysłowej. Wydarzenie miało charakter
            międzynarodowy z racji kraju pochodzenia inwestora, w związku z czym
            niezbędna była obsługa językowa w postaci tłumaczenia
            konferencyjnego symultanicznego z języka polskiego na angielski oraz
            z języka angielskiego na polski.
          </p>
          <p className="mb-7">
            Obsługę tłumaczeniową powierzyłam zespołowi p. Jakuba. Z dużą
            satysfakcją stwierdzam, że wywiązał się z tego zadania na najwyższym
            poziomie. Pan Jakub wykonał tłumaczenie symultaniczne szeregu
            wystąpień przedstawicieli firmy deweloperskiej, firmy zamawiającej
            inwestycję oraz przedstawicieli władz samorządowych. Zrealizowane
            tłumaczenie było dynamiczne i przyjemne w odbiorze, w pełni
            dopasowane tonem i doborem słownictwa do charakteru wydarzenia oraz
            wykonane na wysokim poziomie precyzji. Tłumacze wykazali się również
            dokładnym przygotowaniem terminologicznym i znajomością branży,
            której dotyczyło tłumaczenie.
          </p>
          <p className="mb-7">
            Jestem przekonana, że dzięki tłumaczeniu goście wydarzenia
            zrozumieli 100% treści przemówień w obu językach, dzięki czemu byli
            w pełni zadowoleni z uczestnictwa w evencie. Z pewnością skorzystam
            w przyszłości z usług p. Jakuba Sodolskiego i mogę z pełnym
            przekonaniem polecić go jako pewną firmę i godnego zaufania
            tłumacza.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tab;
