import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CarTableRowProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function CarTableRow({ children, ...rest }: CarTableRowProps) {
  return (
    <tr
      className={twMerge(
        "border border-solid border-[#e5e7eb]",
        rest.className
      )}
    >
      {children}
    </tr>
  );
}
