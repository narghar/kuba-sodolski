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
      <div className="flex justify-between">
        <div className="max-w-lg 2xl:max-w-[812px] flex-shrink">
          <h1 className="text-secondary text-2xl font-light mt-36">
            Tłumaczenia ustne | Tłumacz konferencyjny
          </h1>
          <h2 className="text-white mt-7">
            Nie jest sztuką tłumaczyć słowa. Sztuką jest oddać ich sens i
            emocje.
          </h2>

          <div className="text-white mb-64">
            <h3 className="text-2xl font-medium mt-24 z-10">
              Posłuchaj, jak tłumaczę
            </h3>
            <Image src={audio} placeholder="blur" className="z-10" />
          </div>
        </div>
        <div className="mb-[-6px] self-end relative pr-5">
          <Image src={photo} placeholder="blur" className="z-10" />
          <div className="absolute bottom-0 -left-full">
            <Image src={dots} placeholder="blur" />
          </div>
        </div>
      </div>
      <Button size="big" className="absolute -bottom-14 flex items-center z-10">
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
