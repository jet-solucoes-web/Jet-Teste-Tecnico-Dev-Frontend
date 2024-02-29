import Image from "next/image";
import elipsisVerticalImage from "../../../../../assets/images/elipsis-vertical-vector.svg";

const RatingColumn = () => {
  return (
    <td className="justify-center actions-column">
      <Image src={elipsisVerticalImage} alt="star" width={24} height={24} />
    </td>
  );
};

export default RatingColumn;
