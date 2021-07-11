import cn from "classnames";

const Step = ({ icon, title, text, active }) => {
  return (
    <div
      className={cn(
        "w-[305px]",
        "flex-shrink-0",
        "pt-[66px] pr-[65px] pb-[65px] pl-[60px]",
        "rounded-[15px]",
        "text-3xl",
        active ? "bg-secondary text-[#ffd176]" : "bg-[#2d4861] text-secondary"
      )}
    >
      <i className={icon}></i>
      <span className="text-white block text-2xl font-bold mt-1">{title}</span>
      <h3 className="text-white font-medium text-lg mt-8 leading-tight">{text}</h3>
    </div>
  );
};

export default Step;
