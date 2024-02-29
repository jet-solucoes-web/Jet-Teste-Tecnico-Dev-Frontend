import Image from "next/image";

import MiniCooper2020 from "../../../public/Mini Cooper 2020.png";

const MainTable = () => {
  return (
    <table>
      <tr>
        <th>CAR</th>
        <th>NEXT RESERVATION</th>
        <th>STATUS</th>
        <th>RATING</th>
        <th>ACTIONS</th>
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
