import CarColumn from "./Columns/CarColumn";
import ReserveColumn from "./Columns/ReserveColumn";

const TableBody = () => {
  return (
    <tr className="bg-white text-sm">
      <CarColumn></CarColumn>
      <ReserveColumn></ReserveColumn>
    </tr>
  );
};

export default TableBody;
