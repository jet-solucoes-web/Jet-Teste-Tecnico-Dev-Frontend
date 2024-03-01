import { ElementType } from "react";
import { FaStar } from "react-icons/fa";

interface CarRatingProps {
  ratingStarsAmount: number;
}

export function CarRating({ ratingStarsAmount }: CarRatingProps) {
  const ratingStars: number[] = [];

  for (let index = 0; index < ratingStarsAmount; index++) {
    ratingStars.push(index);
  }

  return (
    <td>
      <div className="flex items-center gap-0.5">
        {ratingStars.map((_, index) => {
          return <FaStar key={index} />;
        })}
      </div>
    </td>
  );
}
