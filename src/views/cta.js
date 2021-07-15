import bgUrl from "assets/cta-bg.png";
import Button from "components/button";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="relative h-[300px] 2xl:h-auto w-full">
      <div className="hidden 2xl:block">
        <Image src={bgUrl} placeholder="blur" quality="100" />
      </div>

        <div className="z-[-1] 2xl:hidden">
          <Image src={bgUrl} placeholder="blur" layout="fill" objectFit="cover" objectPosition="center" />
        </div>

      <div className="absolute bottom-0 2xl:bottom-auto left-1/2 transform -translate-x-1/2 2xl:w-[1300px] w-full ">
        <div className="absolute left-[10.5vw] bottom-[5vw] 2xl:text-right">
          <h4 className="text-white font-bold text-3xl max-w-[430px] mb-9">
            Zamów tłumaczenie w dogodnym dla siebie terminie
          </h4>
          <Button size="normal">Wyślij wiadomość</Button>
        </div>
      </div>
    </section>
  );
}

export default CTA
