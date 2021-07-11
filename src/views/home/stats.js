import bg from "assets/home/stats/bg.png";
import Image from "next/image";

const Stats = () => {
  return (
    <section className="relative -mb-2">
      <div className="hidden lg:block">
        <Image src={bg} placeholder="blur" quality="90" />
      </div>
      <div className="h-[500px] lg:hidden">
        <Image src={bg} placeholder="blur" layout="fill" objectFit="cover" quality="90" />
      </div>
      <div className="absolute grid sm:grid-cols-stats md:gap-x-[20vw] 3xl:gap-x-[390px]  gap-y-[6vw]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {elements.map((el, i) => (
          <p key={i} className="text-center text-white text-2xl">
            <span className="block text-3xl sm:text-4xl md:text-6xl font-bold">
              {el.title}
            </span>
            {el.text}
          </p>
        ))}
      </div>
    </section>
  );
}

const elements = [
  {
    title: "15000 h",
    text: "wykonanych tłumaczeń",
  },
  {
    title: "130+",
    text: "zadowolonych klientów",
  },
  {
    title: "1700+",
    text: "przetłumaczonych spotkań",
  },
  {
    title: "10+ lat",
    text: "na rynku tłumaczeń",
  },
];

export default Stats

