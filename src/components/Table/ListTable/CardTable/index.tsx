import { StaticImageData } from "next/image";
import { FaStar } from "react-icons/fa";
import { RxCheck, RxCross2 } from "react-icons/rx";
import { FaEllipsisVertical } from "react-icons/fa6";

interface ICar {
    Title: string;
    img: StaticImageData;
    Reservation: string;
    Available: boolean;
    Rating: number;
}

export const CardTable = ({ car }: { car: ICar }) => {

    const renderRatingStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= rating) {
            stars.push(
              <FaStar key={i} className="text-black w-4 h-4 rounded-full" />
            );
          } else {
            stars.push(
              <FaStar key={i} className="text-gray-300 w-4 h-4 rounded-full" />
            );
          }
        }
        return stars;
      };

    return (
        <li className="flex md:items-center w-full items-start p-4 border-b border-gray-200">
            <div className="md:w-21p flex md:items-center items-start md:gap-2  gap-5 pr-4 w-full h-full">
              <div className="relative">
                <img
                  className="md:w-12 md:h-11-5 w-20-5 h-20-5"
                  src={car.img.src}
                  alt={car.Title}
                />
                <div className="md:hidden flex w-6 h-6  absolute top-0 left-0">
                    {car.Available ? (
                        <div className="w-full h-full bg-green-600 flex items-center justify-center rounded-full">
                            <RxCheck className="text-white" />
                        </div>
                    ): (
                        <div className="w-full h-full bg-red-600 flex items-center justify-center rounded-full">
                            <RxCross2 className="text-white" />
                        </div>
                    )}
                </div>
              </div>
              <div className="flex flex-col h-full gap-2 w-full md:items-center items-start justify-start">
                <p className="md:text-sm md:font-normal text-base font-semibold text-gray-900 capitalize">
                  {car.Title}
                </p>
                <p className="md:hidden block text-gray-500">Next reservation: {car.Reservation}</p>
                <div className="md:hidden flex mt-1">
                    {renderRatingStars(car.Rating)}
                </div>
              </div>
            </div>
            <div className="w-24p md:flex hidden">
              <p className="text-sm font-normal text-gray-500">
                {car.Reservation}
              </p>
            </div>
            <div className="w-24p md:flex hidden">
              {car.Available ? (
                <div className="py-0.5 px-2.5 w-fit rounded-md bg-green-100">
                  <p className="text-green-800 text-xs font-medium">
                    Available
                  </p>
                </div>
              ) : (
                <div className="py-0.5 px-2.5 rounded-md bg-red-100 w-fit">
                  <p className="text-red-800 text-xs font-medium">
                    Unavailable
                  </p>
                </div>
              )}
            </div>
            <div className="w-24p md:flex hidden">
              {renderRatingStars(car.Rating)}
            </div>
            <div className="md:w-7p h-fit text-black flex justify-center">
              <FaEllipsisVertical className="cursor-pointer" />
            </div>
          </li>
    )
}