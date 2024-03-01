interface CarNextReservationProps {
  nextReservationDate: string;
}

export function CarNextReservation({
  nextReservationDate,
}: CarNextReservationProps) {
  return <td className="text-gray-500">{nextReservationDate}</td>;
}
