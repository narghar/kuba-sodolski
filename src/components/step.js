import cn from "classnames";

const Step = ({ icon, title, text }) => {
  return (
    <div
      className={cn(
        "w-[230px] 4xl:w-[305px]",
        "flex-shrink-0",
        "px-12 py-7 4xl:pt-[66px] 4xl:pr-[65px] 4xl:pb-[65px] 4xl:pl-[60px]",
        "rounded-[15px]",
        "text-3xl",
        "bg-[#2d4861] text-secondary",
        "hover:bg-secondary hover:text-[#ffd176]",
        "transition duration-300 ease-in"
      )}
    >
      <i className={icon}></i>
      <span className="text-white block text-2xl font-bold mt-1">{title}</span>
      <h3 className="text-white font-medium text-lg mt-8 leading-tight">
        {text}
      </h3>
    </div>
  );
};

export default Step;
