import { ReactNode } from "react";
import Image from "next/image";
import { useWindowSize } from "@/hooks/useWindowsSize";

interface CarContentProps {
  children?: ReactNode;
  carImage: any;
  carName: string;
}

export function CarContent({ children, carImage, carName }: CarContentProps) {
  const { width } = useWindowSize();
  return (
    <div className="flex items-center gap-4 md:gap-2">
      <Image
        className="aspect-square object-cover"
        width={width < 768 ? 80 : 48}
        height={width < 768 ? 80 : 48}
        src={carImage}
        alt={carName}
        priority
        placeholder="blur"
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
