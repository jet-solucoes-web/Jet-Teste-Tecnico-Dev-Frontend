import Image from "next/image";
import CommonStars from "../../../public/Star.svg";

const Stars = () => {
  return (
    <span className="flex">
      <Image src={CommonStars} alt="stars" />
      <Image src={CommonStars} alt="stars" />
      <Image src={CommonStars} alt="stars" />
      <Image src={CommonStars} alt="stars" />
      <Image src={CommonStars} alt="stars" />
    </span>
  );
};

export default Stars;
