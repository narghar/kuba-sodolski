import pstk from "assets/footer/pstk-footer.png";
import eu from "assets/home/about/eu.png";
import Image from "next/image";

const HeaderIcons = () => {
  return (
    <div className="flex items-center">
      <Image src={pstk} placeholder="blur" />
      <div className="ml-[72px]">
        <Image src={eu} />
      </div>
      <p className="font-bold text-[17px]  ml-3 leading-5 text-white">
        Tłumacz konferencyjny
        <span className="block font-light">akredytowany przy UE</span>
      </p>
    </div>
  );
};

export default HeaderIcons;
