import Image from "next/image";
import starImage from "../../../../../assets/images/vetor_estrela.svg";

const RatingColumn = () => {
  return (
    <td className="gap-1 rating-column">
      <Image src={starImage} alt="star" width={20} height={20} />
      <Image src={starImage} alt="star" width={20} height={20} />
      <Image src={starImage} alt="star" width={20} height={20} />
      <Image src={starImage} alt="star" width={20} height={20} />
      <Image src={starImage} alt="star" width={20} height={20} />
    </td>
  );
};

export default RatingColumn;
