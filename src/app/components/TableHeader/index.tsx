import "./style.css";

const TableHeader = () => {
  const tableHeaders = ["car", "next reservation", "status", "rating"];

  return (
    <tr>
      {tableHeaders.map((header, index) => (
        <th key={index}>{header.toUpperCase()}</th>
      ))}
    </tr>
  );
};

export default TableHeader;
