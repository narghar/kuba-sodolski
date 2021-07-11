const ServiceCard = ({ item, title, text }) => {
  return (
    <div className="mt-20">
      <h3 className="text-primary text-3xl font-bold relative">
        <span className="absolute z-[-1] top-[-40%] left-[-28%] text-formInpuBG text-[152px] mr-2">{item}</span>
        {title}
      </h3>
      <p className="font-normal text-primary text-lg mt-8 leading-[36px]">
        {text}
      </p>
    </div>
  );
};

export default ServiceCard;
