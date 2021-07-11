import ArrowLeft from "assets/home/01.svg";
import ArrowRight from "assets/home/02.svg";
import image1 from "assets/home/testimonials/01.png";
import image2 from "assets/home/testimonials/02.png";
import image3 from "assets/home/testimonials/03.png";
import Testimonial from "components/testimonial";

const Testimonials = ({children}) => {
  return (
    <section className="pt-36 mb-10">
      <h2 className="primary max-w-[772px] text-primary">
        Nie jest sztuką tłumaczyć słowa. Sztuką jest odać ich sens i emocje
      </h2>
      <div className="flex gap-x-[123px] mt-24">
        {testimonials.map((el, i) => (
          <Testimonial
            key={i}
            text={el.text}
            title={el.title}
            subtitle={el.subtitle}
            avatar={el.avatar}
          />
        ))}
      </div>
      <div className="flex mt-14 gap-x-3">
        <ArrowLeft />
        <ArrowRight />
      </div>
      {children}
    </section>
  );
};


const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin tempor sem, ut ultricies elit dictum in. Donec rhoncus, ante eu commodo tincidunt, justo neque porta metus, sed ornare turpis metus id odio. Duis auctor magna id lacus volutpat porta id quis enim. Duis eros velit, gravida eget tristique vel, vulputate ut metus. Proin quis massa vel justo commodo lobortis eget sit amet ligula.",
    title: "Janusz Korwin-Mikke 007",
    subtitle: "Poseł na Sejm Rzeczpospolitej Polskiej",
    avatar: image1,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin tempor sem, ut ultricies elit dictum in. Donec rhoncus, ante eu commodo tincidunt, justo neque porta metus, sed ornare turpis metus id odio. Duis auctor magna id lacus volutpat porta id quis enim. Duis eros velit, gravida eget tristique vel, vulputate ut metus. Proin quis massa vel justo commodo lobortis eget sit amet ligula.",
    title: "Barbara Drzazga",
    subtitle: "PR HR Recruitment ",
    avatar: image2,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin tempor sem, ut ultricies elit dictum in. Donec rhoncus, ante eu commodo tincidunt, justo neque porta metus, sed ornare turpis metus id odio. Duis auctor magna id lacus volutpat porta id quis enim. Duis eros velit, gravida eget tristique vel, vulputate ut metus. Proin quis massa vel justo commodo lobortis eget sit amet ligula.  ",
    title: "Janusz Korwin-Mikke 007",
    subtitle: "Poseł na Sejm Rzeczpospolitej Polskiej",
    avatar: image3,
  },
];


export default Testimonials;
