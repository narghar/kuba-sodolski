import logo from "assets/header/logo.png";
import cn from "classnames";
import Button from "components/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

const Menu = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  }
  return (
    <div className="relative">
      <div className="flex justify-center sm:justify-end gap-1.5 pt-7">
        {languages.map((lang, i) => (
          <Button size="small" key={i}>
            {lang}
          </Button>
        ))}
      </div>
      <div className="flex justify-between items-center mt-5 sm:mt-0">
        <Link href="/">
          <a>
            <div className="flex items-center gap-5">
              <Image src={logo} placeholder="blur" />
              <p className="text-white font-bold text-[21px]">
                Jakub <span className="text-secondary">S</span>odolski
              </p>
            </div>
          </a>
        </Link>
        <nav
          className={cn(
            active
              ? "absolute bg-primary w-full py-3 text-center top-0 right-0 z-50  transition-all duration-500 md:relative md:text-left md:w-auto md:bg-transparent"
              : "-top-96 md:top-0"
          )}
        >
          <button onClick={handleClick} className="md:hidden">
            <i
              className={cn(
                active ? "las la-times" : "las la-bars",
                "text-white text-3xl mt-1"
              )}
            ></i>
          </button>
          <ul
            className={cn(
              active
                ? "md:flex flex-wrap gap-7"
                : "hidden md:flex flex-wrap gap-7"
            )}
          >
            {items.map((item, i) => (
              <li key={i} className="mb-2 sm:mb-0">
                <Link href={item.href}>
                  <a className="text-white text-base font-medium hover:text-secondary">
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.linkedin.com/in/jakub-sodolski"
                className="text-white hover:text-secondary"
                target="_blank"
              >
                <i className="lab la-linkedin-in text-xl mt-[-2px]"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};


const languages = ["angielski", "francuski", "włoski", "inne"];
const items = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "O mnie",
    href: "/o-mnie",
  },
  {
    title: "Opinie",
    href: "/opinie",
  },
  {
    title: "Usługi",
    href: "/uslugi",
  },
  {
    title: "FAQ",
    href: "/faq",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Kontakt",
    href: "/kontakt",
  },
];


export default Menu;
