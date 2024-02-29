import { useFetchData } from "@/hooks/useFetchData";
import MobileCar from "../MobileCar";

export default function MobileTable() {
  const { data: cars, loading, error  } = useFetchData('/api');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="min-w-full">
      {
        cars.map((car) => (
          <MobileCar key={car.id} {...car} />
        ))
      }
    </section>
  );
}