import { useWindowSize } from "@/hooks/useWindowsSize";
import { IoIosCheckmarkCircle } from "react-icons/io";

interface CarAvailabilityProps {
  isAvailable: boolean;
}

export function CarAvailability({ isAvailable }: CarAvailabilityProps) {
  const { width } = useWindowSize();

  return width >= 768 ? (
    <span
      className={`rounded-md py-1 px-2.5 font-medium ${
        isAvailable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
      {isAvailable ? "Available" : "Unavailable"}
    </span>
  ) : (
    <IoIosCheckmarkCircle className="text-green-700 text-2xl" />
  );
}
