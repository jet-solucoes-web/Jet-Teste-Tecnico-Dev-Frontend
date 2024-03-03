import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CarTableDataProps extends ComponentProps<"td"> {
  children: ReactNode;
}

export function CarTableData({ children, ...rest }: CarTableDataProps) {
  return (
    <td className={twMerge("text-left md:p-4", rest.className)}>{children}</td>
  );
}
