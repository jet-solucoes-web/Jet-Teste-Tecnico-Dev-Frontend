import "./style.css";

const TableHeader = () => {
  const tableHeaders = [
    { name: "Car", class: "car-column" },
    { name: "Next Reservation", class: "reserve-column" },
    { name: "Status", class: "status-column" },
    { name: "Rating", class: "rating-column" },
    { name: "Actions", class: "actions-column" },
  ];

  return (
    <tr>
      {tableHeaders.map((header, index) => (
        <th className={header.class} key={index}>
          {header.name.toUpperCase()}
        </th>
      ))}
    </tr>
  );
};

export default TableHeader;
