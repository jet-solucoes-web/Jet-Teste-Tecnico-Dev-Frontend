import Image from "next/image";
import MiniCooper2020 from "../../../public/Mini Cooper 2020.svg";

const CarNameAndPicture = () => {
  return (
    <div className="h-90 w-100 flex items-center justify-start flex-row">
      <Image src={MiniCooper2020} alt="Mini Cooper 2020" />
      <p className="pl-2% max-[624px]:hidden">Mini Cooper 2020</p>
    </div>
  );
};

export default CarNameAndPicture;
