import ActionsColumn from "./Columns/ActionsColumn";
import CarColumn from "./Columns/CarColumn";
import RatingColumn from "./Columns/RatingColumn";
import ReserveColumn from "./Columns/ReserveColumn";
import StatusColumn from "./Columns/StatusColumn";

const TableBody = () => {
  return (
    <tr className="bg-white text-sm">
      <CarColumn></CarColumn>
      <ReserveColumn></ReserveColumn>
      <StatusColumn></StatusColumn>
      <RatingColumn></RatingColumn>
      <ActionsColumn></ActionsColumn>
    </tr>
  );
};

export default TableBody;
