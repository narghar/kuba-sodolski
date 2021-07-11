import bgUrl from "assets/cta-bg.png";
import Button from "components/button";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="relative">
      <Image src={bgUrl} placeholder="blur" quality="100" />
      <div className="absolute left-1/2 transform -translate-x-1/2 2xl:w-[1300px] w-full ">
        <div className="absolute left-[10.5vw] bottom-[5vw] text-right">
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
