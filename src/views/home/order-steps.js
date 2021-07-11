import dots from "assets/home/order-steps/dots1.png";
import Step from "components/step";
import Image from "next/image";

const OrderSteps = () => {
  return (
    <section className="bg-primary relative">
      <div className="relative mx-auto max-w-base h-[933px] px-5 3xl:px-0 overflow-hidden">
        <h2 className="text-white max-w-xl relative z-10 mt-36">
          Jak wygląda zamawianie tłumaczenia. To szybkie i proste.
        </h2>
        <div className="absolute top-0 right-0 ">
          <Image src={dots} placeholder="blur" />
        </div>
      </div>
      <div className="absolute w-full bottom-[232px] flex flex-wrap justify-center gap-[30px]">
        {steps.map((step, i) => (
          <Step
            key={i}
            icon={step.icon}
            title={step.title}
            text={step.text}
            active={step.active}
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
    active: true,
  },
  {
    icon: "las la-file-alt",
    title: "Krok 2",
    text: "Kontaktuje się z Tobą w ciągu 24 godzin",
    active: false,
  },
  {
    icon: "las la-file-alt",
    title: "Krok 3",
    text: "Dobieramy wariant  tłumaczenia ",
    active: false,
  },
  {
    icon: "las la-file-alt",
    title: "Krok 4",
    text: "Otrzymujesz indywidualną ofertę",
    active: false
  },
  {
    icon: "las la-file-alt",
    title: "Krok 5",
    text: "Cieszysz się płynną komunikacją",
    active: false
  },

];


export default OrderSteps
