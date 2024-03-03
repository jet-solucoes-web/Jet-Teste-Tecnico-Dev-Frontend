import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CarTableHeadProps extends ComponentProps<"thead"> {
  children: ReactNode;
}

export function CarTableHead({ children, ...rest }: CarTableHeadProps) {
  return (
    <thead className={twMerge("bg-gray-50", rest.className)}>{children}</thead>
  );
}
