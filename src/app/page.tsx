import TableBody from "./components/TableBody";
import TableHeader from "./components/TableHeader";

export default function HomePage() {
  return (
    <table className="w-full">
      <TableHeader />
      <TableBody />
    </table>
  );
}
