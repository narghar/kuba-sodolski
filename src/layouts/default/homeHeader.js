import audio from "assets/header/audio.png";
import dots from "assets/header/dots.png";
import photo from "assets/header/photo.png";
import Button from "components/button";
import Image from "next/image";
import Menu from "./menu";
const HomeHeader = () => {
  return (
    <>
     <Menu />
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
        <div className="max-w-lg 2xl:max-w-[812px] flex-shrink">
          <h1 className="text-secondary text-2xl font-light text-center sm:text-left mt-16 sm:mt-36">
            Tłumaczenia ustne <span className="hidden sm:inline">|</span> Tłumacz konferencyjny
          </h1>
          <h2 className="text-white mt-7">
            Nie jest sztuką tłumaczyć słowa. Sztuką jest oddać ich sens i
            emocje.
          </h2>

          <div className="text-white mb-36 md:mb-64">
            <h3 className="text-2xl font-medium mt-16 sm:mt-24 z-10 text-center sm:text-left">
              Posłuchaj, jak tłumaczę
            </h3>
            <Image src={audio} placeholder="blur" className="z-10" />
          </div>
        </div>
        <div className="mb-[-6px] self-end relative pr-5 hidden md:block">
          <Image src={photo} placeholder="blur" className="z-10" />
          <div className="absolute bottom-0 -left-full">
            <Image src={dots} placeholder="blur" />
          </div>
        </div>
      </div>
      <Button size="big" className="absolute -bottom-14 left-1/2 tranform -translate-x-1/2 md:left-auto md:transform-none flex items-center z-10">
        <i className="las la-headset text-accent text-5xl"></i>
        <div className="text-left ml-4">
          <h3 className="text-2xl font-bold">Tłumazenia zdalne</h3>
          <p className="text-accent font-normal mt-2">dowiedz się więcej</p>
        </div>
      </Button>
    </>
  );
};

export default HomeHeader;
