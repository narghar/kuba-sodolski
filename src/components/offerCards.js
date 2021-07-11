import dots from "assets/home/dots.png";
import image1 from "assets/home/offer/01.png";
import image2 from "assets/home/offer/02.png";
import image3 from "assets/home/offer/03.png";
import image4 from "assets/home/offer/04.png";
import Image from "next/image";


const OfferCards = () => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[max-content] lg:grid-cols-2 gap-x-4 gap-y-3 justify-center card-offer relative">
      {cards.map((card, i) => (
        <div key={i} className="relative z-10">
          <Image src={card.imageSrc} placeholder="blur" />
          <div className="absolute flex flex-wrap items-center sm:block top-1/2 transform -translate-y-1/2 px-4 sm:top-auto sm:transform-none sm:bottom-14 sm:px-16  lg:bottom-6 lg:px-10 xl:bottom-14 xl:px-16">
            <i className={`${card.icon} text-secondary text-4xl`}></i>
           {card.title}
            <p className="font-light text-white text-lg sm:text-xl mt-6">
              {card.text}
            </p>
          </div>
        </div>
      ))}
      <div className="absolute z-0 pt-6  top-1/2 -left-1/4 transform -translate-y-1/2">
        <Image src={dots} placeholder="blur" />
      </div>
    </div>
  );
};


const cards = [
  {
    imageSrc: image1,
    icon: "las la-volume-up",
    title: [
      <h4 key="1">
        Tłumaczenia ustne <br /> na żywo
      </h4>,
    ],
    text: "Wykonuje tłumaczenia symultaniczne, konsekutywne, dostarczam sprzęt",
  },
  {
    imageSrc: image2,
    icon: "las la-headset",
    title: [<h4 key="2">Tłumaczenia zdalne</h4>],
    text: "",
  },
  {
    imageSrc: image3,
    icon: "las la-microphone",
    title: [<h4 key="3">Obsługa techniczna</h4>],
    text: "",
  },
  {
    imageSrc: image4,
    icon: "las la-globe",
    title: [<h4 key="4">Wydarzenia wielojęzyczne</h4>],
    text: "",
  },
];

export default OfferCards;
