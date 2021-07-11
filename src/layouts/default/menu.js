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
      <div className="flex justify-end gap-1.5 pt-7">
        {languages.map((lang, i) => (
          <Button size="small" key={i}>
            {lang}
          </Button>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Image src={logo} placeholder="blur" />
          <p className="text-white font-bold text-[21px]">
            Jakub <span className="text-secondary">S</span>odolski
          </p>
        </div>
        <nav
          className={cn(
            active
              ? "absolute bg-primary w-full text-center top-0 right-0 transition-all duration-500 md:relative md:text-left md:w-auto "
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
              <li key={i}>
                <Link href={item.href}>
                  <a className="text-white text-base font-medium hover:text-secondary">
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.linkedin.com/"
                className="text-white hover:text-secondary"
                target="_blank"
              >
                <i className="lab la-linkedin-in"></i>
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
