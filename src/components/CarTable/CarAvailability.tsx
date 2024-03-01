interface CarAvailabilityProps {
  isAvailable: boolean;
}

export function CarAvailability({ isAvailable }: CarAvailabilityProps) {
  return (
    <td>
      {isAvailable ? (
        <span className="bg-green-100 text-green-800 rounded-md py-1 px-2.5 font-medium">
          Available
        </span>
      ) : (
        <span className="bg-red-100 text-red-800 rounded-md py-1 px-2.5 font-medium">
          Unavailable
        </span>
      )}
    </td>
  );
}
