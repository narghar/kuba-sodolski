import cn from "classnames";
const Tab = ({ name, position, active }) => {
  return (
    <div
      className={cn(
        "flex items-center gap-x-5  py-3.5 flex-1 2xl:w-[510px] min-w-[370px] mb-3 rounded-tl-[20px] rounded-bl-[20px]",
        active && "bg-lighterGray"
      )}
    >
      <div className={cn(
      "w-[58px] h-[58px] bg-primary rounded-full",
      active && "ml-7")}></div>
      <p className="text-primary text-lg font-bold mr-2">
        {name}
        <span className="block text-primary text-base font-light">
          {position}
        </span>
      </p>
    </div>
  );
};

export default Tab;
