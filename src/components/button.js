import cn from 'classnames';

const sizes = {
  small: "w-20 py-[3px] text-xs font-medium rounded-[9px]",
  normal: "px-14 py-[13px] text-lg font-bold rounded-[15px]",
  big: 'w-[420px] px-12 py-9 rounded-[20px]'
};

const Button = ({ size, className, children }) => {
  return (
    <button
      className={cn(
        'transition duration-300 ease-in-out', // color change transition
        'shadow-sm hover:shadow-md', // shadow
        'text-white', // text defaults
        'bg-secondary hover:bg-yellow-700', // background defaults
        'focus:outline-none', // disable outline,
        sizes[size],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
