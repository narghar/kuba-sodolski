import cn from "classnames";

const FAQItem = ({question, answer, active }) => {
  return (
    <div className={cn('flex bg-faqBox max-w-[880px] mx-auto py-8 px-2 sm:px-9 mb-4', active ? 'items-start' : 'items-center')}>
      <i className="las la-question text-primary text-4xl mr-1 sm:mr-8"></i>
      <div className="flex-1">
        <p className="font-medium text-primary text-lg">{question}</p>
        <p
          className={cn(
            "font-normal text-faqAnswer text-lg leading-[30px] mt-3",
            active ? "visible" : "hidden"
          )}
        >
          {answer}
        </p>
      </div>
      <i className={cn(active ? 'las la-angle-down' : 'las la-angle-right')}></i>
    </div>
  );
}
export default FAQItem
