import Image from "next/image";
import Dots from "../../../public/Dots on vertical.svg";

const VerticalDots = () => {
  return (
    <span className="flex align-center justify-center">
      <Image src={Dots} alt="vertical dots to actions" />
    </span>
  );
};

export default VerticalDots;
