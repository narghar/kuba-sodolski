import Button from 'components/button';
import React from 'react';

const MainContact = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 gap-y-16 md:gap-y-0 pt-16 pb-16 sm:pb-28">
      <div className="text-center md:text-left">
        <h2 className="text-primary text-2xl text-center md:text-left">
          Dane kontaktowe
        </h2>
        <h3 className="text-primary text-3xl font-bold md:max-w-md mt-12 ">
          Osobiście tłumaczę angielski, włoski i francuski
        </h3>
        <p className="text-primary text-2xl font-light md:max-w-xl mt-8">
          Spytaj mnie o inne języki. Współpracuję z gronem sprawdzonych
          tłumaczy.
        </p>
        <div className="mt-14">
          <p className="text-primary font-medium text-base">Zadzwoń do mnie</p>
          <p className="text-secondary font-bold text-3xl mt-3">505 92 69 77</p>
          <p className="text-primary font-medium text-base mt-9 mb-3">
            Napisz do mnie
          </p>
          <a
            href="mailto:j.sodolski@gmail.com"
            className="text-secondary font-bold text-3xl"
          >
            j.sodolski@gmail.com
          </a>
        </div>
      </div>
      <form method="GET" action="/kontakt">
        <h2 className="text-primary text-2xl text-center md:text-left">
          Formularz kontaktowy
        </h2>
        <fieldset className="grid grid-cols-2 gap-x-3 text-base text-formInputText mt-10">
          <input
            type="text"
            id="name"
            name="name"
            aria-label="Imię"
            required
            className="bg-formInpuBG border-0 box-shadow-none
            placeholder-gray-dark py-3 pl-4 mb-3"
            placeholder="Imię"
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            aria-label="Numer telefonu"
            required
            className="bg-formInpuBG  border-0  placeholder-gray-dark py-3 pl-4 mb-3"
            placeholder="Numer telefonu"
          />
          <textarea
            name="message"
            rows="8"
            placeholder="Co chcesz mi powiedzieć?"
            aria-label="Wiadomość"
            className="col-span-full border-0 bg-formInpuBG placeholder-gray-dark py-3 pl-4 mb-2"
            required
          ></textarea>
        </fieldset>

        <div className="mt-3 mb-10">
          <input
            type="checkbox"
            name="accept-terms"
            id="accept-terms"
            required
            value="true"
            className="checkbox"
          />
          <label
            htmlFor="accept-terms"
            className="flex items-center justify-items-center cursor-pointer text-formInputText text-base"
          >
            <span className="w-4 h-4"></span>
            Akceptuję regulamin
          </label>
        </div>
        <Button size="normal" type="submit">
          Wyślij wiadomość
        </Button>
      </form>
    </section>
  );
}

export default MainContact

