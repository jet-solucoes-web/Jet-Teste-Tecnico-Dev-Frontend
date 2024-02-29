import React from "react";
import Image from "next/image";
import miniCooperImage from "../../../../../assets/images/mini-cooper.jpeg";
import checkIcon from "../../../../../assets/images/check.png";

const CarColumn = () => {
  return (
    <td className="gap-[10px] car-column">
      <div className="relative">
        <Image
          src={checkIcon}
          alt="Check"
          width={16}
          height={16}
          className=" sm:hidden absolute left-0 top-0"
        />

        <Image src={miniCooperImage} alt="Mini Cooper" width={85} height={85} />
      </div>
      <div className="hidden sm:block text-[#111928] text-[14px]">
        Mini cooper 2020
      </div>
    </td>
  );
};

export default CarColumn;
