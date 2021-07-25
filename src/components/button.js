import cn from 'classnames';
import React from 'react';

const sizes = {
  small: "w-20 py-[3px] text-center text-xs font-medium rounded-[9px]",
  normal: "px-14 py-[13px] text-lg font-bold rounded-[15px]",
  big: 'w-[350px] sm:w-[420px] px-7 py-5 sm:px-12 sm:py-9 rounded-[20px]'
};

const Button = React.forwardRef(({onClick, href, size, className, children }, ref) => {
  return (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      className={cn(
        "transition duration-300 ease-in-out", // color change transition
        "shadow-sm hover:shadow-md", // shadow
        "text-white", // text defaults
        "bg-secondary hover:bg-yellow-700", // background defaults
        "focus:outline-none", // disable outline,
        "inline-block",
        sizes[size],
        className
      )}
    >
      {children}
    </a>
  );
})

export default Button;
