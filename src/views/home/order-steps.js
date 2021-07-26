import dots from "assets/home/order-steps/dots1.png";
import Step from "components/step";
import Image from "next/image";

const OrderSteps = () => {
  return (
    <section className="bg-primary relative pb-14 md:pb-0">
      <div className="relative mx-auto max-w-base md:h-[933px] px-5 3xl:px-0 overflow-hidden">
        <h2 className="text-white max-w-xl relative z-10 mx-auto md:ml-0  md:mt-36 my-14 md:mb-0">
          Jak wygląda zamawianie tłumaczenia. To szybkie i proste.
        </h2>
        <div className="hidden md:absolute top-0 right-0 ">
          <Image src={dots} placeholder="blur" />
        </div>
      </div>
      <div className="md:absolute w-full bottom-[50px] 2xl:bottom-[232px] flex flex-wrap justify-center gap-[30px] ">
        {steps.map((step, i) => (
          <Step
            key={i}
            icon={step.icon}
            title={step.title}
            text={step.text}
          />
        ))}
      </div>
    </section>
  );
}



const steps = [
  {
    icon: "las la-file-alt",
    title: "Krok 1",
    text: "Wypełniasz formularz kontaktowy",
  },
  {
    icon: "las la-file-alt",
    title: "Krok 2",
    text: "Kontaktuje się z Tobą w ciągu 24 godzin",
  },
  {
    icon: "las la-file-alt",
    title: "Krok 3",
    text: "Dobieramy wariant  tłumaczenia ",
  },
  {
    icon: "las la-file-alt",
    title: "Krok 4",
    text: "Otrzymujesz indywidualną ofertę",
  },
  {
    icon: "las la-file-alt",
    title: "Krok 5",
    text: "Cieszysz się płynną komunikacją",
  },

];


export default OrderSteps
