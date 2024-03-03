import { ReactNode } from "react";
import Image from "next/image";

interface CarContentProps {
  children?: ReactNode;
  carImage: any;
  carName: string;
}

export function CarContent({ children, carImage, carName }: CarContentProps) {
  return (
    <div className="flex items-center gap-4 md:gap-2">
      <Image
        className="aspect-square object-cover max-w-20 w-full md:max-w-none md:w-auto"
        src={carImage}
        alt={carName}
        priority
      />

      <div>
        <p className="inline-block text-gray-900 font-semibold md:font-medium">
          {carName}
        </p>
        {children}
      </div>
    </div>
  );
}
