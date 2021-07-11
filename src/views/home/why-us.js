import dots from "assets/home/dots.png";
import photo from "assets/home/why-us/01.png";
import Image from "next/image";
const WhyUs = () => {
  return (
    <section className="flex gap-x-14 pt-52 flex-wrap lg:flex-nowrap">
      <div className="max-w-[657px]">
        <h2 className="text-primary mt-24">
          Chcesz, żeby uczestnicy rozumieli 98% treści zamiast standardowych
          60%?
        </h2>
        <p className="text-primary font-light leading-8 text-lg mt-12 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </div>
      <div className="flex-shrink-1 2xl:flex-shrink-0 2xl:mr-[-310px] relative mb-80">
        <Image src={photo} placeholder="blur" />
        <div className="absolute z-0 pt-6 w-full  -bottom-1/4 flex justify-center">
          <Image src={dots} placeholder="blur" />
        </div>
      </div>
    </section>
  );
}

export default WhyUs

