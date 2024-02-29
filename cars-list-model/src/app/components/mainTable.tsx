import AvaliableDate from "./avaliableDate";
import Stars from "./stars";
import VerticalDots from "./verticalDots";
import CarStatus from "./carStatus";
import CarNameAndPicture from "./carNameAndPicture";

const MainTable = () => {
  return (
    <table className="max-h-90 max-w-95 w-95vw h-90 border">
      <tr className=" h-14.50 w-100 bg-[#F9FAFB] border-b border-gray-200">
        <th className="text-[#6B7280] text-start w-22.5 pl-2%">CAR</th>
        <th className="text-[#6B7280] text-start w-22.5">NEXT RESERVATION</th>
        <th className="text-[#6B7280] text-start w-22.5">STATUS</th>
        <th className="text-[#6B7280] text-start w-22.5">RATING</th>
        <th className="text-[#6B7280] text-center w-10">ACTIONS</th>
      </tr>
      <tr className="h-14.25 border-b border-gray-200">
        <td className="content-center pl-2%">
          <div className="flex items-center justify-start flex-row">
            <CarNameAndPicture />
          </div>
        </td>
        <td className="text-start">
          <AvaliableDate />
        </td>
        <td>
          <CarStatus />
        </td>
        <td>
          <Stars />
        </td>
        <td>
          <VerticalDots />
        </td>
      </tr>
      <tr className="h-14.25 border-b border-gray-200">
        <td className="content-center pl-2%">
          <div className="flex items-center justify-start flex-row">
            <CarNameAndPicture />
          </div>
        </td>
        <td className="text-start">
          <AvaliableDate />
        </td>
        <td>
          <CarStatus />
        </td>
        <td>
          <Stars />
        </td>
        <td className="text-center">
          <VerticalDots />
        </td>
      </tr>
      <tr className="h-14.25 border-b border-gray-200">
        <td className="content-center pl-2%">
          <CarNameAndPicture />
        </td>
        <td className="text-start">
          <AvaliableDate />
        </td>
        <td>
          <CarStatus />
        </td>
        <td>
          <Stars />
        </td>
        <td>
          <VerticalDots />
        </td>
      </tr>
      <tr className="h-14.25 border-b border-gray-200">
        <td className="content-center pl-2%">
          <div className="flex items-center justify-start flex-row">
            <CarNameAndPicture />
          </div>
        </td>
        <td className="text-start">
          <AvaliableDate />
        </td>
        <td>
          <CarStatus />
        </td>
        <td>
          <Stars />
        </td>
        <td>
          <VerticalDots />
        </td>
      </tr>
      <tr className="h-14.25 border-b border-gray-200">
        <td className="content-center pl-2%">
          <div className="flex items-center justify-start flex-row">
            <CarNameAndPicture />
          </div>
        </td>
        <td className="text-start">
          <AvaliableDate />
        </td>
        <td>
          <CarStatus />
        </td>
        <td>
          <Stars />
        </td>
        <td>
          <VerticalDots />
        </td>
      </tr>
      <tr className="h-14.25 m-h-14.25 border-b border-gray-200">
        <td className="content-center pl-2%">
          <CarNameAndPicture />
        </td>
        <td className="text-start">
          <AvaliableDate />
        </td>
        <td>
          <CarStatus />
        </td>
        <td>
          <Stars />
        </td>
        <td>
          <VerticalDots />
        </td>
      </tr>
    </table>
  );
};

export default MainTable;
