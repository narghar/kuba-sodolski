import pstk from "assets/footer/pstk-footer.png";
import rebena from "assets/footer/rebena.png";
import ue from "assets/footer/ue.png";
import audio from 'assets/header/audio.png';
import Button from "components/button";
import Container from "components/container";
import Image from "next/image";

const LayoutDefaultFooter = () => {
  return (
    <footer className="bg-primary pt-28 pb-36">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 ">
          <div>
            <h2 className="text-white mt-3">
              Potrzebujesz tłumacza? Organizujesz wydarzenie? Masz pytania?
            </h2>
            <Button size="normal" className="text-primary mt-10">
              Skontaktuj się
            </Button>
          </div>
          <div className="mt-5 justify-self-end">
            <p className="text-white font-light text-lg">Zadzwoń do mnie</p>
            <p className="text-secondary font-bold text-3xl mt-2">
              505 92 69 77
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
              <h3 className="text-2xl font-medium mt-32 mb-4">
                Posłuchaj, jak tłumaczę
              </h3>
              <Image src={audio} placeholder="blur" className="z-10" />
            </div>
          </div>
          <div className="col-span-full flex items-center justify-between">
            <div className="flex items-center">
              <Image src={ue} />
              <p className="text-white font-bold text-[17px] ml-5 mr-[4.7rem]">
                Tłumacz konferencyjny
                <span className="block text-light">akredytowany przy UE</span>
              </p>
              <Image src={pstk} placeholder="blur" />
            </div>
            <div className="flex items-center rebena" >
              <p className="mr-4">Projekt i realizacja:</p>
              <Image src={rebena} placeholder="blur" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default LayoutDefaultFooter;
