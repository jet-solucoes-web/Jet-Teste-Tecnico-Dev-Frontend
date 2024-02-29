import Image from "next/image";

import MiniCooper2020 from "../../../public/Mini Cooper 2020.png";

const MainTable = () => {
  return (
    <table className="w-95 h-90 bg-[yellow]">
      <tr className="w-100 bg-[#F9FAFB]">
        <th className="text-[#6B7280]">CAR</th>
        <th className="text-[#6B7280]">NEXT RESERVATION</th>
        <th className="text-[#6B7280]">STATUS</th>
        <th className="text-[#6B7280]">RATING</th>
        <th className="text-[#6B7280]">ACTIONS</th>
      </tr>
      <tr>
        <td>
          <Image
            src={MiniCooper2020}
            alt="Mini Cooper 2020"
            width={"20"}
            height={"25"}
          />
          <Image
            src={MiniCooper2020}
            alt="Mini Cooper 2020"
            width={"20"}
            height={"25"}
          />
          <Image
            src={MiniCooper2020}
            alt="Mini Cooper 2020"
            width={"20"}
            height={"25"}
          />
          <Image
            src={MiniCooper2020}
            alt="Mini Cooper 2020"
            width={"20"}
            height={"25"}
          />
          <Image
            src={MiniCooper2020}
            alt="Mini Cooper 2020"
            width={"20"}
            height={"25"}
          />
          <Image
            src={MiniCooper2020}
            alt="Mini Cooper 2020"
            width={"20"}
            height={"25"}
          />
        </td>
        <td>
          <span>11/07</span>
          <span>11/07</span>
          <span>11/07</span>
          <span>11/07</span>
          <span>11/07</span>
          <span>11/07</span>
        </td>
        <td>
          <p>Avaliable</p>
          <p>Avaliable</p>
          <p>Avaliable</p>
          <p>Avaliable</p>
          <p>Avaliable</p>
          <p>Avaliable</p>
        </td>
        <td>
          <span>******</span>
          <span>******</span>
          <span>******</span>
          <span>******</span>
          <span>******</span>
          <span>******</span>
        </td>
        <td>
          <span>...</span>
          <span>...</span>
          <span>...</span>
          <span>...</span>
          <span>...</span>
          <span>...</span>
        </td>
      </tr>
    </table>
  );
};

export default MainTable;
