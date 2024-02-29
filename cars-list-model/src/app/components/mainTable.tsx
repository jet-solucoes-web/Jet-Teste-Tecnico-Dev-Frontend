import AvaliableDate from "./avaliableDate";
import Stars from "./stars";
import VerticalDots from "./verticalDots";
import CarStatus from "./carStatus";
import CarNameAndPicture from "./carNameAndPicture";
import AvaliableDateMobile from "./avaliableDateMobile";

const MainTable = () => {
  return (
    <table className="max-h-90 max-w-95 w-95vw h-90 border">
      <tr className="  bg-[#F9FAFB] border-b border-gray-200 max-[928px]:hidden">
        <th className="text-[#6B7280] text-start w-22.5 pl-2%">CAR</th>
        <th className="text-[#6B7280] text-start w-22.5">NEXT RESERVATION</th>
        <th className="text-[#6B7280] text-start w-22.5">STATUS</th>
        <th className="text-[#6B7280] text-start w-22.5">RATING</th>
        <th className="text-[#6B7280] text-center w-10 pr-2%">ACTIONS</th>
      </tr>
      <tr className="h-14.25 border-b border-gray-200 max-[624px]:hidden">
        <td className="content-center pl-2%">
          <div className="flex items-center justify-start flex-row max-[624px]:inline-block">
            <CarNameAndPicture />
          </div>
        </td>
        <td className="text-start">
          <AvaliableDate />
        </td>
        <td className="max-[624px]:hidden">
          <CarStatus />
        </td>
        <td>
          <Stars />
        </td>
        <td>
          <VerticalDots />
        </td>
      </tr>
      <tr className="h-14.25 border-b border-gray-200 max-[624px]:hidden">
        <td className="content-center pl-2%">
          <div className="flex items-center justify-start flex-row">
            <CarNameAndPicture />
          </div>
        </td>
        <td className="text-start">
          <AvaliableDate />
        </td>
        <td className="max-[624px]:hidden">
          <CarStatus />
        </td>
        <td>
          <Stars />
        </td>
        <td className="text-center">
          <VerticalDots />
        </td>
      </tr>
      <tr className="h-14.25 border-b border-gray-200 max-[624px]:hidden">
        <td className="content-center pl-2%">
          <CarNameAndPicture />
        </td>
        <td className="text-start">
          <AvaliableDate />
        </td>
        <td className="max-[624px]:hidden">
          <CarStatus />
        </td>
        <td>
          <Stars />
        </td>
        <td>
          <VerticalDots />
        </td>
      </tr>
      <tr className="h-14.25 border-b border-gray-200 w-100 max-[624px]:hidden">
        <td className="content-center pl-2%">
          <div className="flex items-center justify-start flex-row">
            <CarNameAndPicture />
          </div>
        </td>
        <td className="text-start">
          <AvaliableDate />
        </td>
        <td className="max-[624px]:hidden">
          <CarStatus />
        </td>
        <td>
          <Stars />
        </td>
        <td>
          <VerticalDots />
        </td>
      </tr>
      <tr className="h-14.25 border-b border-gray-200 max-[624px]:hidden">
        <td className="content-center pl-2%">
          <div className="flex items-center justify-start flex-row">
            <CarNameAndPicture />
          </div>
        </td>
        <td className="text-start">
          <AvaliableDate />
        </td>
        <td className="max-[624px]:hidden">
          <CarStatus />
        </td>
        <td>
          <Stars />
        </td>
        <td>
          <VerticalDots />
        </td>
      </tr>
      <tr className="h-14.25 m-h-14.25 border-b border-gray-200 max-[624px]:hidden">
        <td className="content-center pl-2%">
          <CarNameAndPicture />
        </td>
        <td className="text-start">
          <AvaliableDate />
        </td>
        <td className="max-[624px]:hidden">
          <CarStatus />
        </td>
        <td>
          <Stars />
        </td>
        <td>
          <VerticalDots />
        </td>
      </tr>
      <tr className="h-14.25 m-h-14.25 border-b border-gray-200 flex justify-around min-[624px]:hidden">
        <td className="content-center pl-2%">
          <CarNameAndPicture />
        </td>
        <div className="flex w-50 flex-col">
          <td>
            <p className="pl-2%">Mini Cooper 2020</p>
          </td>
          <td className="text-start">
            <AvaliableDateMobile />
          </td>
          <td>
            <Stars />
          </td>
        </div>
        <td>
          <VerticalDots />
        </td>
      </tr>
      <tr className="h-14.25 m-h-14.25 border-b border-gray-200 flex justify-around min-[624px]:hidden">
        <td className="content-center pl-2%">
          <CarNameAndPicture />
        </td>
        <div className="flex w-50 flex-col">
          <td>
            <p className="pl-2%">Mini Cooper 2020</p>
          </td>
          <td className="text-start">
            <AvaliableDateMobile />
          </td>
          <td>
            <Stars />
          </td>
        </div>
        <td>
          <VerticalDots />
        </td>
      </tr>
      <tr className="h-14.25 m-h-14.25 border-b border-gray-200 flex justify-around min-[624px]:hidden">
        <td className="content-center pl-2%">
          <CarNameAndPicture />
        </td>
        <div className="flex w-50 flex-col">
          <td>
            <p className="pl-2%">Mini Cooper 2020</p>
          </td>
          <td className="text-start">
            <AvaliableDateMobile />
          </td>
          <td>
            <Stars />
          </td>
        </div>
        <td>
          <VerticalDots />
        </td>
      </tr>
      <tr className="h-14.25 m-h-14.25 border-b border-gray-200 flex justify-around min-[624px]:hidden">
        <td className="content-center pl-2%">
          <CarNameAndPicture />
        </td>
        <div className="flex w-50 flex-col">
          <td>
            <p className="pl-2%">Mini Cooper 2020</p>
          </td>
          <td className="text-start">
            <AvaliableDateMobile />
          </td>
          <td>
            <Stars />
          </td>
        </div>
        <td>
          <VerticalDots />
        </td>
      </tr>
      <tr className="h-14.25 m-h-14.25 border-b border-gray-200 flex justify-around min-[624px]:hidden">
        <td className="content-center pl-2%">
          <CarNameAndPicture />
        </td>
        <div className="flex w-50 flex-col">
          <td>
            <p className="pl-2%">Mini Cooper 2020</p>
          </td>
          <td className="text-start">
            <AvaliableDateMobile />
          </td>
          <td>
            <Stars />
          </td>
        </div>
        <td>
          <VerticalDots />
        </td>
      </tr>
      <tr className="h-14.25 m-h-14.25 border-b border-gray-200 flex justify-around min-[624px]:hidden">
        <td className="content-center pl-2%">
          <CarNameAndPicture />
        </td>
        <div className="flex w-50 flex-col">
          <td>
            <p className="pl-2%">Mini Cooper 2020</p>
          </td>
          <td className="text-start">
            <AvaliableDateMobile />
          </td>
          <td>
            <Stars />
          </td>
        </div>
        <td>
          <VerticalDots />
        </td>
      </tr>
    </table>
  );
};

export default MainTable;
