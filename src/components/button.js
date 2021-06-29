import cn from 'classnames';

const colors = {
  green: 'bg-green-400 hover:bg-green-500 text-white',
  red: 'bg-red-500 hover:bg-red-600 text-white'
};

const Button = ({ bold, color, className, children }) => {
  return (
    <button
      className={cn(
        'px-2 py-2', // padding
        'transition duration-300 ease-in-out', // color change transition
        'shadow-sm hover:shadow-md', // shadow
        'text-black text-base font-normal', // text defaults
        'focus:outline-none', // disable outline,
        colors[color] || 'bg-white hover:bg-gray-100',
        bold && 'font-bold',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
