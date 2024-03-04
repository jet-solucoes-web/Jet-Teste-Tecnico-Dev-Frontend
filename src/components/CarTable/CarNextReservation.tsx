interface CarNextReservationProps {
  nextReservationDate: string;
  isMobileVersion: boolean;
}

export function CarNextReservation({
  nextReservationDate,
  isMobileVersion,
}: CarNextReservationProps) {
  return isMobileVersion ? (
    <p className="text-gray-500 text-sm mt-1 mb-2.5">Next reservation: {nextReservationDate}</p>
  ) : (
    <p className="text-gray-500">{nextReservationDate}</p>
  );
}
