import { dataCar } from "@/data/dataCar";
import { CardTable } from "./CardTable";


export const ListTable = () => {

    return (
        <ul className="w-full">
        {dataCar.map((car,index) => (
          <CardTable key={index} car={car} />
        ))}
      </ul>
    )
}