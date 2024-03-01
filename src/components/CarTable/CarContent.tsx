import Image from "next/image";

interface CarContentProps {
  carImage: any;
  carName: string;
}

export function CarContent({ carImage, carName }: CarContentProps) {
  return (
    <td className="flex items-center gap-2 py-1">
      <Image src={carImage} alt={carName} />

      <p className="inline-block text-gray-900">{carName}</p>
    </td>
  );
}
