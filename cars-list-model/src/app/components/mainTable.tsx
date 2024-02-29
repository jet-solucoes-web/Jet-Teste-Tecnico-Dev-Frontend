import Image from "next/image";

import MiniCooper2020 from "../../../public/Mini Cooper 2020.png";

const MainTable = () => {
  return (
    <table className="h-lvh bg-[black]">
      <tr className="w-5/6 bg-[#1da1f2]">
        <th className="w-1/5">CAR</th>
        <th className="w-1/5">NEXT RESERVATION</th>
        <th className="w-1/5">STATUS</th>
        <th className="w-1/5">RATING</th>
        <th className="w-1/5">ACTIONS</th>
      </tr>
      <tr>
        <td>
          <Image
            src={MiniCooper2020}
            alt="Mini Cooper 2020"
            width={"200"}
            height={"200"}
          />
          <Image
            src={MiniCooper2020}
            alt="Mini Cooper 2020"
            width={"200"}
            height={"200"}
          />
          <Image
            src={MiniCooper2020}
            alt="Mini Cooper 2020"
            width={"200"}
            height={"200"}
          />
          <Image
            src={MiniCooper2020}
            alt="Mini Cooper 2020"
            width={"200"}
            height={"200"}
          />
          <Image
            src={MiniCooper2020}
            alt="Mini Cooper 2020"
            width={"200"}
            height={"200"}
          />
          <Image
            src={MiniCooper2020}
            alt="Mini Cooper 2020"
            width={"200"}
            height={"200"}
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
