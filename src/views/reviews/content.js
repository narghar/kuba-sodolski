import image1 from "assets/reviews/01.png";
import image2 from "assets/reviews/02.png";
import Image from "next/image";

const Content = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-24 gap-y-12 md:gap-y-36 py-16 sm:pt-40 sm:pb-44">
      <div className="text-primary font-light">
        <p className="text-2xl leading-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu diam
          nulla. Fusce turpis eros, porta in porttitor eu, venenatis a elit.
        </p>
        <p className="text-lg leading-[30px]">
          Quisque porttitor ante at dui aliquam eleifend. Maecenas sed lectus
          eget augue porta hendrerit. Nullam pellentesque diam ullamcorper
          feugiat varius. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Curabitur tristique at nibh sed
          semper. Duis consequat faucibus purus id rhoncus. Proin tristique
          risus eu eleifend iaculis.
        </p>
      </div>
      <figure className="relative justify-self-center lg:justify-self-end order-last xl:order-none ">
        <div className="relative">
          <Image src={image1} />
          <i className="las la-play absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[97px] z-50"></i>
          <div className="absolute bg-primary bg-opacity-40 inset-0 w-full h-cardFix z-40"></div>
        </div>
      </figure>
      <figure className="relative justify-self-center lg:justify-self-start">
        <Image src={image2} />
        <i className="las la-play absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[97px] z-50"></i>
        <div className="absolute bg-primary bg-opacity-40 inset-0 w-full h-cardFix z-40"></div>
      </figure>
      <div className="text-primary font-light">
        <p className="text-2xl leading-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu diam
          nulla. Fusce turpis eros, porta in porttitor eu, venenatis a elit.
        </p>
        <p className="text-lg leading-[30px]">
          Quisque porttitor ante at dui aliquam eleifend. Maecenas sed lectus
          eget augue porta hendrerit. Nullam pellentesque diam ullamcorper
          feugiat varius. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Curabitur tristique at nibh sed
          semper. Duis consequat faucibus purus id rhoncus. Proin tristique
          risus eu eleifend iaculis.
        </p>
      </div>

    </section>
  );
};


export default Content;
