import React from "react";
import "./style.css";
import Image from "next/image";
import miniCooperImage from "../../../../../assets/images/mini-cooper.jpeg";

const CarColumn = () => {
  return (
    <td className="gap-1 car-column">
      <Image
        src={miniCooperImage}
        alt="Mini Cooper"
        width={48.96}
        height={48.96}
      />
      <span>Mini Cooper 2020</span>
    </td>
  );
};

export default CarColumn;
