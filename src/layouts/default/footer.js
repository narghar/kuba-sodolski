import pstk from "assets/footer/pstk-footer.png";
import rebena from "assets/footer/rebena.png";
import ue from "assets/footer/ue.png";
import audio from 'assets/header/audio.png';
import Button from "components/button";
import Container from "components/container";
import Image from "next/image";
import Link from "next/link";

const LayoutDefaultFooter = () => {
  return (
    <footer className="bg-primary pt-20 md:pt-28 pb-20 md:pb-36 text-center md:text-left">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-32 ">
          <div>
            <h2 className="text-white mt-3 text-center md:text-left">
              Potrzebujesz tłumacza? Organizujesz wydarzenie? Masz pytania?
            </h2>
            <Link href="/kontakt" passHref>
              <Button size="normal" className="text-primary mt-10">
                Skontaktuj się
              </Button>
            </Link>
          </div>
          <div className="mt-5 md:justify-self-end">
            <p className="text-white font-light text-lg">Zadzwoń do mnie</p>
            <p className="text-secondary font-bold text-3xl mt-2">
              <a href="tel:+48505926977">505 92 69 77</a>
            </p>
            <p className="text-white font-light text-lg mt-12 mb-2">
              Napisz do mnie
            </p>
            <a
              href="mailto:j.sodolski@gmail.com"
              className="text-secondary font-bold text-3xl"
            >
              j.sodolski@gmail.com
            </a>
            <div className="text-white">
              <h3 className="text-2xl font-medium mt-16 md:mt-32 mb-4">
                Posłuchaj, jak tłumaczę
              </h3>
              <Image src={audio} placeholder="blur" className="z-10" />
            </div>
          </div>
          <div className="col-span-full flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center justify-center sm:justify-start flex-wrap sm:flex-nowrap gap-y-6 sm:gap-y-0">
              <Image src={ue} />
              <p className="text-white font-bold text-[17px] ml-5 mr-5 sm:mr-[4.7rem]">
                Tłumacz konferencyjny
                <span className="block text-light">akredytowany przy UE</span>
              </p>
              <Image src={pstk} placeholder="blur" />
            </div>

            <div className="flex items-center rebena mt-6 sm:mt-0">
              <p className="mr-4">Projekt i realizacja:</p>
              <a
                href="https://rebenagesta.com/"
                target="_blank"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src={rebena}
                  placeholder="blur"
                  alt="Realizacja Re Bena Gesta"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default LayoutDefaultFooter;
