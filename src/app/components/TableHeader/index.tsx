import "./style.css";

const TableHeader = () => {
  const tableHeaders = ["car", "next reservation", "status", "rating"];

  return (
    <tr className="flex justify-between">
      {tableHeaders.map((header, index) => (
        <th key={index}>{header.toUpperCase()}</th>
      ))}
    </tr>
  );
};

export default TableHeader;
