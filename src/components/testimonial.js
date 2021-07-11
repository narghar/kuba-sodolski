import Image from "next/image";

const Testimonial = ({ text, title, subtitle, avatar }) => {
  return (
    <div>
      <p className="w-[664px] text-lg font-light text-lightGray leading-9">{text}</p>
      <div className="flex items-center mt-12">
        <Image src={avatar} placeholder="blur" className="rounded-full"  />
        <h3 className="text-primary font-bold text-2xl ml-4">
          {title}
          <span className="block font-light text-lg ">{subtitle}</span>
        </h3>
      </div>
    </div>
  );
};

export default Testimonial;
