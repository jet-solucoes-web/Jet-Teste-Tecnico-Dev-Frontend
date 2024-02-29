import { HeaderTable } from "./HeaderTable";
import { ListTable } from "./ListTable";

export const Table = () => {
  return (
    <div className="table md:max-w-8xl">
      <HeaderTable />
      <ListTable />
    </div>
  );
};
