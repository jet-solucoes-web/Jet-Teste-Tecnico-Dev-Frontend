import CarColumn from "./Columns/CarColumn";
import ReserveColumn from "./Columns/ReserveColumn";
import StatusColumn from "./Columns/StatusColumn";

const TableBody = () => {
  return (
    <tr className="bg-white text-sm">
      <CarColumn></CarColumn>
      <ReserveColumn></ReserveColumn>
      <StatusColumn></StatusColumn>
    </tr>
  );
};

export default TableBody;
