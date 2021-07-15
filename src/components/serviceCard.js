const ServiceCard = ({ item, title, text }) => {
  return (
    <div className="mt-16 md:mt-24">
      <h3 className="text-primary text-3xl font-bold relative">
        <span className="absolute z-[-1] top-[-6%] md:left-[-5%] 3xl:left-[-22%] text-formInpuBG text-[125px] mr-2">{item}</span>
        {title}
      </h3>
      <p className="font-normal text-primary text-lg mt-7 leading-[30px]">
        {text}
      </p>
    </div>
  );
};

export default ServiceCard;
